import json
import pytest
import ConfigSettings
import os
import logging

logger = logging.getLogger(name=None)

TEST_GROUP = "common"
TEST_KEY = "CAPTURE_CAM_RESOLUTION_HEIGHT"
TEST_KEY_DEFAULT_VALUE = ConfigSettings.ConfigSettings().getSchema()[
    "properties"][TEST_GROUP]["default"][TEST_KEY]
TEST_KEY_TEST_VALUE = TEST_KEY_DEFAULT_VALUE+1

"""
prepare config for testing
several sources of the config: testing here that all sources apply properly:
lowest->highest priority
env
'.env.installer',
'.env.dev',
'.env',
'.env.prod'
json
init arguments

private variable _testing_variable is used for testing.
"""


@pytest.fixture
def tmpMoveAllOutOfTheWay():
    filenames = [
        "./config/config.json",
    ]
    filenames.extend(ConfigSettings.ConfigSettings().Config.env_file)

    # rename all files
    for filename in filenames:
        try:
            os.rename(filename, f"{filename}-tmp")
        except:
            # fail silently if file not exists...
            pass

    # yield fixture instead return to allow for cleanup:
    yield

    # return original filenames
    for filename in filenames:
        try:
            os.rename(f"{filename}-tmp", filename)
        except:
            # fail silently if file not exists...
            pass


@pytest.fixture(params=['.env.installer', '.env.dev', '.env', '.env.prod'])
def tmpEnvFile(tmpMoveAllOutOfTheWay, request):

    with open(request.param, 'w') as env_file:
        env_file.write(
            f"{TEST_GROUP}__{TEST_KEY}='{TEST_KEY_TEST_VALUE}'")

    # yield fixture instead return to allow for cleanup:
    yield

    # cleanup
    os.remove(request.param)


def test_CompareSettingsVsConfigSettings():
    from ConfigSettings import settings
    assert settings == ConfigSettings.ConfigSettings()


def test_DefaultSetting(tmpMoveAllOutOfTheWay):
    assert ConfigSettings.ConfigSettings(
    ).common.CAPTURE_CAM_RESOLUTION_HEIGHT == TEST_KEY_DEFAULT_VALUE


def test_EnvFile(tmpEnvFile):
    assert ConfigSettings.ConfigSettings(
    ).common.CAPTURE_CAM_RESOLUTION_HEIGHT == TEST_KEY_TEST_VALUE


def test_InitUpdatedSettings():
    updatedSettings = ConfigSettings.ConfigSettings(
        common={'CAPTURE_CAM_RESOLUTION_HEIGHT': TEST_KEY_TEST_VALUE})
    assert updatedSettings.common.CAPTURE_CAM_RESOLUTION_HEIGHT == TEST_KEY_TEST_VALUE


def test_PersistSettings(tmpMoveAllOutOfTheWay):
    updatedSettings = ConfigSettings.ConfigSettings(
        common={'CAPTURE_CAM_RESOLUTION_HEIGHT': TEST_KEY_TEST_VALUE})

    # creates config/config.json
    updatedSettings.persist()

    with open('./config/config.json', "r") as f:
        data = json.load(f)

    assert data[TEST_GROUP][TEST_KEY] == TEST_KEY_TEST_VALUE

    # remove test file again
    os.remove('./config/config.json')
