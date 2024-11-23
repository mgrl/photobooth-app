"""
AppConfig class providing central config

"""

import sys
from typing import Literal, TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from wigglecam.connector.models import ConfigCameraNode, ConfigCameraPool

BackendsBase = Literal["VirtualCamera", "WebcamCv2", "Wigglecam"]
BackendsLinux = Literal["Picamera2", "WebcamV4l", "Gphoto2"]
BackendsWindows = Literal["Digicamcontrol"]

if sys.platform == "win32":
    BackendsPlatform: TypeAlias = BackendsBase | BackendsWindows
elif sys.platform == "linux":
    BackendsPlatform: TypeAlias = BackendsBase | BackendsLinux
else:
    BackendsPlatform = BackendsBase


class GroupBackendVirtualcamera(BaseModel):
    model_config = ConfigDict(title="VirtualCamera")
    # no additional configuration yet!

    emulate_camera_delay_still_capture: float = Field(
        default=0.2,
        multiple_of=0.1,
        ge=0,
        le=5,
        description="Emulate the delay of a camera. Time between camera is requested to deliver a still and actual delivery to the app.",
    )
    framerate: int = Field(
        default=15,
        ge=5,
        le=30,
        description="Reduce the framerate to save cpu/gpu on device displaying the live preview",
    )
    emulate_multicam_capture_devices: int = Field(
        default=4,
        ge=2,
        le=20,
        description="Number of emulated cameras when asking for synchronized capture for wigglegrams.",
    )


class GroupBackendPicamera2(BaseModel):
    model_config = ConfigDict(title="Picamera2")

    camera_num: int = Field(
        default=0,
        description="Camera number. Usually 0 or 1.",
    )
    CAPTURE_CAM_RESOLUTION_WIDTH: int = Field(
        default=1280,
        description="camera resolution width to capture high resolution photo",
    )
    CAPTURE_CAM_RESOLUTION_HEIGHT: int = Field(
        default=720,
        description="camera resolution height to capture high resolution photo",
    )
    PREVIEW_CAM_RESOLUTION_WIDTH: int = Field(
        default=1280,
        ge=500,
        le=3500,  # hardware encoder in pi only supports max 4000 width/height
        description="camera resolution width to capture live video",
    )
    PREVIEW_CAM_RESOLUTION_HEIGHT: int = Field(
        default=720,
        ge=500,
        le=2500,  # hardware encoder in pi only supports max 4000 width/height
        description="camera resolution height to capture live video",
    )
    LIVEVIEW_RESOLUTION_WIDTH: int = Field(
        default=1280,
        ge=500,
        le=3500,  # hardware encoder in pi only supports max 4000 width/height
        description="actual resolution width for liveview stream",
    )
    LIVEVIEW_RESOLUTION_HEIGHT: int = Field(
        default=720,
        ge=500,
        le=2500,  # hardware encoder in pi only supports max 4000 width/height
        description="actual resolution height for liveview stream",
    )
    CAMERA_TRANSFORM_HFLIP: bool = Field(
        default=False,
        description="Apply horizontal flip to image source to picamera2 backend",
    )
    CAMERA_TRANSFORM_VFLIP: bool = Field(
        default=False,
        description="Apply vertical flip to image source to picamera2 backend",
    )
    optimized_lowlight_short_exposure: bool = Field(
        default=False,
        description="Raise AnalogueGain(=ISO) preferred before longer shutter times to avoid unsharp capture of moving people.",
    )
    videostream_quality: Literal["VERY_LOW", "LOW", "MEDIUM", "HIGH", "VERY_HIGH"] = Field(
        default="MEDIUM",
        description="Lower quality results in less data to be transferred and may reduce load on devices.",
    )
    original_still_quality: int = Field(
        default=90,
        ge=10,
        le=100,
        description="Picamera produces original files, this is the quality for the JPG.",
        json_schema_extra={"ui_component": "QSlider"},
    )


class GroupBackendGphoto2(BaseModel):
    model_config = ConfigDict(title="Gphoto2")

    gcapture_target: str = Field(
        default="",
        description="Set capture target (examples: 'Internal RAM', 'Memory card'). To keep images, capture to a disk target. Empty means default of camera (mostly RAM).",
    )
    disable_viewfinder_before_capture: bool = Field(
        default=True,
        description="Disable viewfinder before capture might speed up following capture autofocus. Might not work with every camera.",
    )
    iso_liveview: str = Field(
        default="",
        description="Sets the ISO for when the photobooth is in live preview modus. Very useful, when Camera does not support Exposure Simulation, and an external Flash is used. Only works when the camera is in manual. (Example Values: Auto, 100, 200, ...)",
    )
    iso_capture: str = Field(
        default="",
        description="Sets the ISO for when the photobooth captures a photo. Very useful, when Camera does not support Exposure Simulation, and an external Flash is used. Only works when the camera is in manual. (Example Values: Auto, 100, 200, ...)",
    )
    shutter_speed_liveview: str = Field(
        default="",
        description="Sets the shutter speed for the camera during the photobooth's live preview mode. Very useful, when Camera does not support Exposure Simulation, and an external Flash is used. This setting is effective only when the camera is in manual mode. (Example Values: 1, 1/5, 1/20, 1/30, 1/60, 1/1000, 1/4000, ...) Choose a very high default shutter speed in combination with Auto iso to emulate auto exposure. ",
    )
    shutter_speed_capture: str = Field(
        default="",
        description="Configures the shutter speed for the camera at the time of capturing a photo in the photobooth. Very useful, when Camera does not support Exposure Simulation, and an external Flash is used. Operational only in manual mode. (Example Values: 1/60, 1/320, 1/1000, 1/2000, 1/4000, ...)",
    )


class GroupBackendOpenCv2(BaseModel):
    model_config = ConfigDict(title="OpenCv2")

    device_index: int = Field(
        default=0,
        description="Device index of webcam. Usually 0 or 1, check docs how to determine.",
    )
    CAM_RESOLUTION_WIDTH: int = Field(
        default=10000,
        description="Resolution width requested from camera.",
    )
    CAM_RESOLUTION_HEIGHT: int = Field(
        default=10000,
        description="Resolution height requested from camera.",
    )
    CAMERA_TRANSFORM_HFLIP: bool = Field(
        default=False,
        description="Apply horizontal flip to image source to opencv2 backend",
    )
    CAMERA_TRANSFORM_VFLIP: bool = Field(
        default=False,
        description="Apply vertical flip to image source to opencv2 backend",
    )
    framerate: int = Field(
        default=15,
        ge=5,
        le=30,
        description="Reduce the framerate to save cpu/gpu on device displaying the live preview",
    )


class GroupBackendV4l2(BaseModel):
    model_config = ConfigDict(title="V4l2")

    device_index: int = Field(
        default=0,
        description="Device index of webcam. Usually 0 or 1, check docs how to determine.",
    )
    CAM_RESOLUTION_WIDTH: int = Field(
        default=10000,
        description="Resolution width requested from camera.",
    )
    CAM_RESOLUTION_HEIGHT: int = Field(
        default=10000,
        description="Resolution height requested from camera.",
    )


class GroupBackendDigicamcontrol(BaseModel):
    model_config = ConfigDict(title="Digicamcontrol")

    base_url: str = Field(
        default="http://127.0.0.1:5513",
        description="Base URL used to connect to the host running the digicamcontrol software. Usually photobooth-app and digicamcontrol are on the same computer and no adjustmend needed.",
    )


class GroupBackendWigglecam(ConfigCameraPool):
    model_config = ConfigDict(title="Wigglecam Connector")

    index_backend_stills: int = Field(
        default=0,
        description="Index of one node below to capture stills.",
    )
    index_backend_video: int = Field(
        default=0,
        description="Index of one backend below to capture live preview and video.",
    )

    nodes: list[ConfigCameraNode] = [
        ConfigCameraNode(description="TestNode"),
    ]


class GroupBackend(BaseModel):
    """
    Choose backends for still images/high quality images captured on main backend.
    If the livepreview is enabled, the video is captured from live backend (if configured)
    or main backend.
    """

    model_config = ConfigDict(title="Main Backend Configuration")

    enabled: bool = Field(
        title="Load and start backend",
        default=True,
        description="Selected device will be loaded and started.",
    )
    selected_device: BackendsPlatform = Field(
        title="Configure device",
        default="VirtualCamera",
        description="Select backend and configure the device below",
    )

    virtualcamera: GroupBackendVirtualcamera = GroupBackendVirtualcamera()
    webcamcv2: GroupBackendOpenCv2 = GroupBackendOpenCv2()
    wigglecam: GroupBackendWigglecam = GroupBackendWigglecam()

    if sys.platform == "linux":
        picamera2: GroupBackendPicamera2 = GroupBackendPicamera2()
        webcamv4l: GroupBackendV4l2 = GroupBackendV4l2()
        gphoto2: GroupBackendGphoto2 = GroupBackendGphoto2()

    if sys.platform == "win32":
        digicamcontrol: GroupBackendDigicamcontrol = GroupBackendDigicamcontrol()


class GroupBackends(BaseModel):
    """
    Choose backends for still images/high quality images captured on main backend.
    If the livepreview is enabled, the video is captured from live backend (if configured)
    or main backend.
    """

    model_config = ConfigDict(title="Camera Backend Config")

    enable_livestream: bool = Field(
        default=True,
        description="Enable livestream (if possible)",
    )
    retry_capture: int = Field(
        default=3,
        ge=1,
        le=5,
        description="Number of attempts to gather a picture from backend.",
    )
    countdown_camera_capture_offset: float = Field(
        default=0.2,
        multiple_of=0.05,
        ge=0,
        le=20,
        description="Trigger camera capture by offset earlier (in seconds). 0 trigger exactly when countdown is 0. Use to compensate for delay in camera processing for better UX.",
    )

    index_backend_stills: int = Field(
        default=0,
        description="Index of one backend below to capture stills.",
    )
    index_backend_video: int = Field(
        default=0,
        description="Index of one backend below to capture live preview and video.",
    )
    index_backend_multicam: int = Field(
        default=0,
        description="Index of one backend below used for multicamera images (wigglegrams).",
    )

    group_backends: list[GroupBackend] = [GroupBackend()]
