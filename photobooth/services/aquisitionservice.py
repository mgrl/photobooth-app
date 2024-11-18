"""
manage up to two photobooth-app backends in this module
"""

import dataclasses
import logging
from functools import cache
from importlib import import_module
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

from .backends.abstractbackend import AbstractBackend
from .baseservice import BaseService
from .config import appconfig
from .sseservice import SseService
from .wledservice import WledService

logger = logging.getLogger(__name__)


class AquisitionService(BaseService):
    """
    Class managing photobooth-app backends
    MAIN: used for high quality still pictures
    LIVE: used for streams and live previews
          (can be used additionally if MAIN is not capable to deliver video)
    """

    def __init__(self, sse_service: SseService, wled_service: WledService):
        super().__init__(sse_service=sse_service)
        self._wled_service: WledService = wled_service

        self._backends: list[AbstractBackend] = None
        self._running: bool = None

    def start(self):
        """start backends"""

        self._backends: list[AbstractBackend] = []
        self._running = True

        # get backend obj and instanciate
        for backend_config in appconfig.backends.group_backends:
            backend: AbstractBackend = self._import_backend(backend_config.selected_device)(
                getattr(backend_config, str(backend_config.selected_device).lower())
            )

            self._backends.append(backend)

        logger.info(f"loaded backends: {self._backends}")

        try:
            for backend in self._backends:
                if backend_config.enabled:
                    backend.start()
                else:
                    logger.info(f"skipped starting backend {backend} because not enabled")
        except Exception as exc:
            logger.exception(exc)
            logger.critical("could not init/start backend")

            self.set_status_fault()

            return

        super().set_status_started()

    def stop(self):
        """stop backends"""

        self._running = False

        for backend in self._backends:
            backend.stop()

        super().set_status_stopped()

    def stats(self):
        """
        Gather stats from active backends.
        Backend stats are converted to dict to be processable by JSON lib

        Returns:
            _type_: _description_
        """
        aquisition_stats = {}
        for backend in self._backends:
            stats = dataclasses.asdict(backend.stats())
            aquisition_stats |= {str(backend): stats}

        return aquisition_stats

    def _get_stills_backend(self) -> AbstractBackend:
        index = appconfig.backends.index_backend_stills
        try:
            return self._backends[index]
        except IndexError as exc:
            raise RuntimeError(f"illegal configuration, cannot get backend {index=}") from exc

    def _get_video_backend(self) -> AbstractBackend:
        index = appconfig.backends.index_backend_video
        try:
            return self._backends[index]
        except IndexError as exc:
            raise RuntimeError(f"illegal configuration, cannot get backend {index=}") from exc

    def _get_multicam_backend(self) -> AbstractBackend:
        index = appconfig.backends.index_backend_multicam
        try:
            return self._backends[index]
        except IndexError as exc:
            raise RuntimeError(f"illegal configuration, cannot get backend {index=}") from exc

    def gen_stream(self):
        """
        assigns a backend to generate a stream
        """

        if appconfig.backends.enable_livestream:
            return self._get_stream_from_backend(self._get_video_backend())

        raise ConnectionRefusedError("livepreview not enabled")

    def wait_for_still_file(self):
        """
        function blocks until high quality image is available
        """

        self._wled_service.preset_shoot()

        try:
            still_backend = self._get_stills_backend()
            return still_backend.wait_for_still_file(appconfig.backends.retry_capture)
        except Exception as exc:
            raise exc
        finally:
            # ensure even if failed, the wled is set to standby again
            self._wled_service.preset_standby()

    def wait_for_multicam_files(self):
        """
        function blocks until high quality image is available
        """

        self._wled_service.preset_shoot()

        try:
            multicam_backend = self._get_multicam_backend()
            return multicam_backend.wait_for_multicam_files(appconfig.backends.retry_capture)
        except Exception as exc:
            raise exc
        finally:
            # ensure even if failed, the wled is set to standby again
            self._wled_service.preset_standby()

    def start_recording(self, video_framerate: int = 25):
        self._get_video_backend().start_recording(video_framerate)

    def stop_recording(self):
        self._get_video_backend().stop_recording()

    def is_recording(self):
        return self._get_video_backend().is_recording()

    def get_recorded_video(self):
        return self._get_video_backend().get_recorded_video()

    def signalbackend_configure_optimized_for_idle(self):
        """
        set backends to idle mode (called to switched as needed by processingservice)
        called when job is finished
        """
        for backend in self._backends:
            backend._on_configure_optimized_for_idle()

    def signalbackend_configure_optimized_for_hq_preview(self):
        """
        set backends to preview mode preparing to hq capture (called to switched as needed by processingservice)
        called on start of countdown
        """
        for backend in self._backends:
            backend._on_configure_optimized_for_hq_preview()

    def signalbackend_configure_optimized_for_hq_capture(self):
        """
        set backends to hq capture mode (called to switched as needed by processingservice)
        called right before capture hq still
        """
        for backend in self._backends:
            backend._on_configure_optimized_for_hq_capture()

    def signalbackend_configure_optimized_for_video(self):
        """
        set backend to video optimized mode. currently same as for idle because idle is optimized for liveview video already.
        called on start of countdown to recording job (as preview and actual video capture are expected to work same for preview and video capture)
        """
        self.signalbackend_configure_optimized_for_idle()

    @staticmethod
    def _import_backend(backend: str):
        # dynamic import of backend

        module_path = f".backends.{backend.lower()}"
        class_name = f"{backend}Backend"
        pkg = ".".join(__name__.split(".")[:-1])  # to allow relative imports

        module = import_module(module_path, package=pkg)
        return getattr(module, class_name)

    def _get_stream_from_backend(self, backend_to_stream_from: AbstractBackend):
        """
        yield jpeg images to stream to client (if not created otherwise)
        this function may be overriden by backends, but this is the default one
        relies on the backends implementation of _wait_for_lores_image to return a buffer
        """
        logger.info(f"livestream started on backend {backend_to_stream_from=}")
        backend_to_stream_from.device_enable_lores_stream = True

        while self._running:
            try:
                output_jpeg_bytes = backend_to_stream_from.wait_for_lores_image()
            except StopIteration:
                logger.info("stream ends due to shutdown aquisitionservice")
                return
            except Exception as exc:
                # this error probably cannot recover.
                logger.exception(exc)
                logger.error(f"streaming exception: {exc}")
                output_jpeg_bytes = __class__._substitute_image(
                    "Oh no - stream error :(",
                    f"{type(exc).__name__}, no preview from cam. retrying.",
                    appconfig.uisettings.livestream_mirror_effect,
                )

            yield (b"--frame\r\n" b"Content-Type: image/jpeg\r\n\r\n" + output_jpeg_bytes + b"\r\n\r\n")

    @staticmethod
    @cache
    def _substitute_image(caption: str = "Error", message: str = "Something happened!", mirror: bool = False) -> bytes:
        """Create a substitute image in case the stream fails.
        The image shall clarify some error occured to the user while trying to recover.

        Args:
            caption (str, optional): Caption in first line. Defaults to "".
            message (str, optional): Additional error message in second line. Defaults to "".
            mirror (bool, optional): Flip left/right in case the stream has mirror effect applied. Defaults to False.

        Returns:
            bytes: _description_
        """
        path_font = Path(__file__).parent.joinpath("backends", "assets", "backend_abstract", "fonts", "Roboto-Bold.ttf").resolve()
        text_fill = "#888"
        img = Image.new("RGB", (400, 300), "#ddd")
        img_draw = ImageDraw.Draw(img)
        font_large = ImageFont.truetype(font=str(path_font), size=22)
        font_small = ImageFont.truetype(font=str(path_font), size=15)
        img_draw.text((25, 100), caption, fill=text_fill, font=font_large)
        img_draw.text((25, 120), message, fill=text_fill, font=font_small)
        img_draw.text((25, 140), "please check camera and logs", fill=text_fill, font=font_small)

        # flip if mirror effect is on because messages shall be readable on screen
        if mirror:
            img = ImageOps.mirror(img)

        # create jpeg
        jpeg_buffer = BytesIO()
        img.save(jpeg_buffer, format="jpeg", quality=95)
        return jpeg_buffer.getvalue()
