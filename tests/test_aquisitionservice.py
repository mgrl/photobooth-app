import io
import logging

import pytest
from dependency_injector import providers
from PIL import Image
from pymitter import EventEmitter

from photobooth.appconfig import (
    AppConfig,
    EnumImageBackendsLive,
    EnumImageBackendsMain,
)
from photobooth.services.backends.containers import BackendsContainer
from photobooth.services.containers import ServicesContainer

logger = logging.getLogger(name=None)


def test_getimages_frommultiple_backends():
    # modify config:
    evtbus = providers.Singleton(EventEmitter)
    config = providers.Singleton(AppConfig)
    services = ServicesContainer(
        evtbus=evtbus,
        config=config,
        backends=BackendsContainer(
            evtbus=evtbus,
            config=config,
        ),
    )
    config().backends.LIVEPREVIEW_ENABLED = True
    config().backends.MAIN_BACKEND = EnumImageBackendsMain.SIMULATED
    config().backends.LIVE_BACKEND = EnumImageBackendsLive.SIMULATED

    aquisition_service = services.aquisition_service()
    # is started automatically now: aquisition_service.start()

    with Image.open(io.BytesIO(aquisition_service.wait_for_hq_image())) as img:
        logger.info(img)
        img.verify()

    # TODO: test gen_stream()


def test_getimages_change_backend_during_runtime():
    # modify config:
    evtbus = providers.Singleton(EventEmitter)
    config = providers.Singleton(AppConfig)
    services = ServicesContainer(
        evtbus=evtbus,
        config=config,
        backends=BackendsContainer(
            evtbus=evtbus,
            config=config,
        ),
    )
    config().backends.LIVEPREVIEW_ENABLED = True
    config().backends.MAIN_BACKEND = EnumImageBackendsMain.SIMULATED
    config().backends.LIVE_BACKEND = EnumImageBackendsLive.DISABLED

    aquisition_service = services.aquisition_service()

    # main gives image
    with Image.open(
        io.BytesIO(aquisition_service.primary_backend.wait_for_hq_image())
    ) as img:
        logger.info(img)
        img.verify()

    # secondary fails, because disabled
    with pytest.raises(AttributeError):
        aquisition_service.secondary_backend.wait_for_hq_image()

    # now reconfigure
    config().backends.LIVE_BACKEND = EnumImageBackendsLive.SIMULATED

    # shutdown/init to restart resources
    services.aquisition_service.shutdown()
    services.aquisition_service.init()

    # not clear yet, why need to get service again to get pics.
    aquisition_service = services.aquisition_service()

    # now main and secondary provide images
    with Image.open(
        io.BytesIO(aquisition_service.primary_backend.wait_for_hq_image())
    ) as img:
        logger.info(img)
        img.verify()

    with Image.open(
        io.BytesIO(aquisition_service.secondary_backend.wait_for_hq_image())
    ) as img:
        logger.info(img)
        img.verify()


def test_getimages_directlyaccess_backends():
    # modify config:
    evtbus = providers.Singleton(EventEmitter)
    config = providers.Singleton(AppConfig)
    services = ServicesContainer(
        evtbus=evtbus,
        config=config,
        backends=BackendsContainer(
            evtbus=evtbus,
            config=config,
        ),
    )
    config().backends.LIVEPREVIEW_ENABLED = True
    config().backends.MAIN_BACKEND = EnumImageBackendsMain.SIMULATED
    config().backends.LIVE_BACKEND = EnumImageBackendsLive.SIMULATED

    aquisition_service = services.aquisition_service()

    with Image.open(
        io.BytesIO(aquisition_service.primary_backend.wait_for_hq_image())
    ) as img:
        logger.info(img)
        img.verify()

    with Image.open(
        io.BytesIO(aquisition_service.primary_backend._wait_for_lores_image())
    ) as img:
        logger.info(img)
        img.verify()

    with Image.open(
        io.BytesIO(aquisition_service.secondary_backend.wait_for_hq_image())
    ) as img:
        logger.info(img)
        img.verify()

    with Image.open(
        io.BytesIO(aquisition_service.secondary_backend._wait_for_lores_image())
    ) as img:
        logger.info(img)
        img.verify()
