#!/usr/bin/python3
"""
Photobooth Application start script
"""
import logging
import multiprocessing
import os
import socket

import uvicorn
from dependency_injector.wiring import Provide, inject

from photobooth.application import app

from .appconfig import AppConfig
from .containers import ApplicationContainer
from .services.loggingservice import LoggingService

logger = logging.getLogger(f"{__name__}")


@inject
def main(
    config: AppConfig = Provide[ApplicationContainer.config],
    logging_service: LoggingService = Provide[ApplicationContainer.logging_service],
) -> uvicorn.Server:
    logger.info("Welcome to photobooth-app")

    # set spawn for all systems (defaults fork on linux currently and spawn on windows platform)
    # spawn will be the default for all systems in future so it's set here now to have same
    # results on all platforms
    multiprocessing_start_method = multiprocessing.get_start_method(allow_none=True)
    logger.info(f"{multiprocessing_start_method=}, before forcing")
    multiprocessing.set_start_method(method="spawn", force=True)
    multiprocessing_start_method = multiprocessing.get_start_method(allow_none=True)
    logger.info(f"{multiprocessing_start_method=}, forced")

    # log_level="trace", default info
    server = uvicorn.Server(
        uvicorn.Config(
            app=app,
            host="0.0.0.0",
            port=config.common.webserver_port,
            log_level="debug",
        )
    )

    # shutdown app workaround:
    # workaround until https://github.com/encode/uvicorn/issues/1579 is fixed and
    # shutdown can be handled properly.
    # Otherwise the stream.mjpg if open will block shutdown of the server
    # signal CTRL-C and systemctl stop would have no effect, app stalls
    # signal.signal(signal.SIGINT, signal_handler) and similar
    # don't work, because uvicorn is eating up signal handler
    # currently: https://github.com/encode/uvicorn/issues/1579
    # the workaround: currently we set force_exit to True to shutdown the server
    server.force_exit = True

    # adjust logging after uvicorn setup
    logging_service.uvicorn()

    return server


def guard(port: int):
    # guard to start only one instance at a time.
    try:
        s = socket.socket()
        s.bind(("0.0.0.0", port))  # bind fails on second instance, raising OSError
        s.close()
    except OSError as exc:
        print("startup aborted. another instance is running. exiting.")
        logger.critical("startup aborted. another instance is running. exiting.")
        raise SystemExit("webserver port not avail") from exc


if __name__ == "__main__" or "PYTEST_CURRENT_TEST" in os.environ:
    application_container = ApplicationContainer()

    # allow one instance at a time, set whether webserver port is avail as sign it's good or not
    guard(application_container.config().common.webserver_port)

    application_container.init_resources()
    application_container.wire(modules=[__name__], packages=[".routers"])

    # start main application
    server = main()

    # serve files forever, loops endless
    # this one is not executed in tests because it's not stoppable from within
    if __name__ == "__main__":
        server.run()

    application_container.shutdown_resources()