
import hashlib
from lib.FrameServer import getJpegByHiresFrame, getScaledJpegByJpeg, writeJpegToFile
from pathlib import Path
import time
import glob
import os
import logging
logger = logging.getLogger(__name__)

DATA_PATH = './data/'
PATH_IMAGE = 'image/'
PATH_PREVIEW = 'preview/'
PATH_THUMBNAIL = 'thumbnail/'


def _dbImageItem(filepath: str, caption: str = ""):

    if (not filepath):
        raise Exception("need filepath")

    filename = os.path.basename(filepath)

    if (caption):
        caption = caption
    else:
        caption = filename

    datetime = os.path.getmtime(f"{DATA_PATH}{PATH_IMAGE}{filename}")

    item = {
        'caption': caption,
        'filename': filename,
        'datetime': datetime,
        'image': f"{DATA_PATH}{PATH_IMAGE}{filename}",
        'preview': f"{DATA_PATH}{PATH_PREVIEW}{filename}",
        'thumbnail': f"{DATA_PATH}{PATH_THUMBNAIL}{filename}",
    }

    if not (Path(item['image']).is_file() and Path(item['preview']).is_file() and Path(item['thumbnail']).is_file()):
        raise FileNotFoundError(
            f"the imageset is incomplete, not adding {filename} to database")

    return item


class ImageDb():
    """Handle all image related stuff"""

    def __init__(self, cs, frameServer):
        self._cs = cs
        # self._frameServer = frameServer

        self._db = {}  # Dict of Images with unique identifier as key

        # TODO: check all directory exist and are writeable - otherwise raise exception.

        self._init_db()

    def _init_db(self):
        logger.info(
            "init database and creating missing scaled images. this might take some time.")
        image_paths = sorted(glob.glob(f"{DATA_PATH}{PATH_IMAGE}*.jpg"))
        counterFailedImages = 0

        for image_path in image_paths:
            logger.debug(f"processing {image_path}")

            try:
                id = self._dbAddItem(_dbImageItem(image_path))

            except FileNotFoundError:
                # _dbImageItem raises FileNotFoundError if image/preview/thumb is missing.
                logger.debug(
                    f"file {image_path} misses its scaled versions, try to create now")

                # try create missing preview/thumbnail and retry. otherwise fail completely
                try:
                    with open(image_path, 'rb') as f:
                        self.createScaledImages(f.read(), image_path)
                except Exception as e:
                    logger.error(
                        f"file {image_path} is not readable or scaled images not created. file ignored. {e}")
                    counterFailedImages += 1
                else:
                    id = self._dbAddItem(_dbImageItem(image_path))

        logger.info(
            f"initialized image DB, added {self.numberOfImages} valid images")
        if counterFailedImages:
            logger.error(
                f"{counterFailedImages} some files have errors, go and check the data dir for problems")

    def _dbAddItem(self, item):
        id = hashlib.md5(item['filename'].encode('utf-8')).hexdigest()
        self._db[id] = item
        return id

    def _dbDeleteItem(self, id):
        del self._db[id]

    def _dbDeleteItems(self):
        self._db = {}

    @property
    def numberOfImages(self):
        return len(self._db)

    def dbGetImages(self, sortByKey="datetime", reverse=True):
        return dict(sorted(self._db.items(), key=lambda x: x[1][sortByKey], reverse=reverse))

    def dbGetImage(self, id):
        try:
            return self._db[id]
        except Exception as e:
            logger.exception(f"image {id} not found{e}")

    """
    processing logic below
    """

    def createScaledImages(self, buffer_full, filepath):
        filename = os.path.basename(filepath)
        # print(buffer_full)
        # preview version
        prev_filepath = f"{DATA_PATH}{PATH_PREVIEW}{filename}"
        buffer_preview = getScaledJpegByJpeg(
            buffer_full, self._cs._current_config["PREVIEW_QUALITY"], self._cs._current_config["PREVIEW_SCALE_FACTOR"])
        writeJpegToFile(
            buffer_preview, prev_filepath)
        logger.info(f"created and saved preview image {prev_filepath}")

        # thumbnail version
        thumb_filepath = f"{DATA_PATH}{PATH_THUMBNAIL}{filename}"
        buffer_thumbnail = getScaledJpegByJpeg(
            buffer_full, self._cs._current_config["THUMBNAIL_QUALITY"], self._cs._current_config["THUMBNAIL_SCALE_FACTOR"])
        writeJpegToFile(
            buffer_thumbnail, thumb_filepath)
        logger.info(f"created and saved thumbnail image {thumb_filepath}")

    def createImageSetFromFrame(self, hires_frame, filepath):
        """
        A newly captured frame was taken by camera, now its up to this class to create the thumbnail, preview
        finally event is sent when processing is finished
        """
        if not filepath:
            filepath = f"{time.strftime('%Y%m%d_%H%M%S')}.jpg"
        filename = os.path.basename(filepath)

        # create JPGs
        buffer_full = getJpegByHiresFrame(
            hires_frame, self._cs._current_config["HIRES_QUALITY"])

        # save to disk
        writeJpegToFile(
            buffer_full, f"{DATA_PATH}{PATH_IMAGE}{filename}")

        # create scaled versions of full image
        self.createScaledImages(buffer_full, filename)

        item = _dbImageItem(filename)
        id = self._dbAddItem(item)

        return item, id

    def deleteImage(self, id):
        """ delete single file and it's related thumbnails """
        logger.info(f"request delete item id {id}")
        try:
            os.remove(self._db[id]['image'])
            os.remove(self._db[id]['preview'])
            os.remove(self._db[id]['thumbnail'])
            self._dbDeleteItem(id)
        except Exception as e:
            logger.exception(f"error deleting item id={id}, error {e}")
            raise

    def deleteImages(self):
        """ delete all images, inclusive thumbnails, ..."""
        try:
            for file in os.scandir(f"{DATA_PATH}{PATH_IMAGE}*.jpg"):
                os.remove(file.path)
            for file in os.scandir(f"{DATA_PATH}{PATH_PREVIEW}*.jpg"):
                os.remove(file.path)
            for file in os.scandir(f"{DATA_PATH}{PATH_THUMBNAIL}*.jpg"):
                os.remove(file.path)
            self._dbDeleteItems()
        except OSError as e:
            raise Exception(
                f"error deleting file {file.path} {e}")
