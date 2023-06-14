"""
submit events on gpio pin interrups

Pin Numbering: https://gpiozero.readthedocs.io/en/stable/recipes.html#pin-numbering

"""
import subprocess

from gpiozero import Button
from pymitter import EventEmitter

from ..appconfig import AppConfig
from ..utils.exceptions import ProcessMachineOccupiedError
from ..utils.helper import is_rpi
from .baseservice import BaseService
from .processingservice import ProcessingService

HOLD_TIME_SHUTDOWN = 2
HOLD_TIME_REBOOT = 2
DEBOUNCE_TIME = 0.1


class GpioService(BaseService):
    """_summary_"""

    def __init__(
        self,
        evtbus: EventEmitter,
        config: AppConfig,
        processing_service: ProcessingService,
    ):
        super().__init__(evtbus=evtbus, config=config)

        self._processing_service = processing_service

        # input buttons
        self.shutdown_btn: Button = None
        self.reboot_btn: Button = None
        self.take1pic_btn: Button = None

        # output signals
        # none yet

        if self._config.hardwareinputoutput.gpio_enabled:
            if is_rpi():
                self.init_io()
                self._logger.info("gpio enabled - listeners installed")
            else:
                self._logger.info("platform is not raspberry pi - gpio library is not supported")
        else:
            if is_rpi():
                self._logger.info("gpio not enabled - enable for gpio support on raspberry pi")

    def init_io(self):
        self.shutdown_btn = Button(
            self._config.hardwareinputoutput.gpio_pin_shutdown, hold_time=HOLD_TIME_SHUTDOWN, bounce_time=DEBOUNCE_TIME
        )
        self.reboot_btn: Button = Button(
            self._config.hardwareinputoutput.gpio_pin_reboot, hold_time=HOLD_TIME_REBOOT, bounce_time=DEBOUNCE_TIME
        )
        self.take1pic_btn: Button = Button(
            self._config.hardwareinputoutput.gpio_pin_take1pic, bounce_time=DEBOUNCE_TIME
        )

        self._register_listener()

    def start(self):
        pass

    def stop(self):
        pass

    def _shutdown(self):
        self._logger.info("trigger _shutdown")
        subprocess.check_call(["poweroff"])

    def _reboot(self):
        self._logger.info("trigger _reboot")
        subprocess.check_call(["reboot"])

    def _take1pic(self):
        self._logger.info("trigger _take1pic")

        try:
            self._processing_service.evt_chose_1pic_get()
        except ProcessMachineOccupiedError as exc:
            # raised if processingservice not idle
            self._logger.warning(f"only one capture at a time allowed, request ignored: {exc}")
        except Exception as exc:
            # other errors
            self._logger.critical(exc)

    def _register_listener(self):
        self._register_listener_inputs()
        self._register_listener_outputs()

    def _register_listener_inputs(self):
        self._logger.warning(f"{self.shutdown_btn=}")

        # shutdown
        self.shutdown_btn.when_held = self._shutdown
        # reboot
        self.reboot_btn.when_held = self._reboot
        # takepic
        self.take1pic_btn.when_pressed = self._take1pic

    def _register_listener_outputs(self):
        pass