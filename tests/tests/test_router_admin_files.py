import os
from dataclasses import asdict
from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from photobooth.application import app
from photobooth.container import container
from photobooth.routers.api_admin.files import PathListItem


@pytest.fixture
def client() -> TestClient:
    with TestClient(app=app, base_url="http://test/api/") as client:
        container.start()
        yield client
        container.stop()


@pytest.fixture
def client_authenticated(client) -> TestClient:
    response = client.post("/admin/auth/token", data={"username": "admin", "password": "0000"})
    token = response.json()["access_token"]
    client.headers = {"Authorization": f"Bearer {token}"}
    yield client


@pytest.fixture(
    params=[
        "/admin/files/list/",
        "/admin/files/list/userdata",
    ]
)
def admin_files_endpoint(request):
    # setup
    yield request.param
    # cleanup


def test_admin_simple_endpoints(client_authenticated: TestClient, admin_files_endpoint):
    response = client_authenticated.get(admin_files_endpoint)
    assert response.status_code == 200


def test_admin_file_endpoints(client_authenticated: TestClient):
    open(".testfile", "a").close()
    response = client_authenticated.get("/admin/files/file/.testfile")
    os.remove(".testfile")

    assert response.status_code == 200


def test_admin_list_notexists(client_authenticated: TestClient):
    response = client_authenticated.get("/admin/files/list/.testfile_notexistantdir")
    assert response.status_code == 404

    response = client_authenticated.get("/admin/files/list/.testdir_notexistantdir/")
    assert response.status_code == 404


def test_admin_file_notexists(client_authenticated: TestClient):
    response = client_authenticated.get("/admin/files/file/.testfile_notexistant")
    assert response.status_code == 404


def test_admin_files_traversalchecks(client_authenticated: TestClient):
    response = client_authenticated.get("/admin/files/file/%2e%2e%2ftestfile_notexistant")
    assert response.status_code == 400

    response = client_authenticated.get("/admin/files/list/%2e%2e%2ftestfile_notexistant/")
    assert response.status_code == 400

    response = client_authenticated.post("/admin/files/folder/new", json="/%2e%2e%2ftestfile_notexistant/")
    assert response.status_code == 400


def test_admin_files_zip_post(client_authenticated: TestClient):
    # make up a list - only filepath needs to be valid for this function.
    selected_files = [
        asdict(PathListItem(name=".gitignore", filepath=".gitignore", is_dir=False, size=0)),  # file
        asdict(PathListItem(name="log", filepath="./log", is_dir=True, size=0)),  # dir, both types are tested
    ]

    response = client_authenticated.post("/admin/files/zip", json=selected_files)
    assert response.status_code == 200


def test_admin_files_zip_post_notfound(client_authenticated: TestClient):
    # make up a list - only filepath needs to be valid for this function.
    # there is a bug in zipfile.py. can ignore the warning for our booth: https://github.com/python/cpython/issues/81954
    selected_files = [
        asdict(PathListItem(name=".gitignore", filepath=".gitignore1", is_dir=False, size=0)),  # file
        asdict(PathListItem(name="log", filepath="./log1", is_dir=True, size=0)),  # dir, both types are tested
    ]

    response = client_authenticated.post("/admin/files/zip", json=selected_files)
    assert response.status_code == 400


def test_admin_files_upload(client_authenticated: TestClient):
    with open("tests/assets/input.jpg", "rb") as f:
        response = client_authenticated.post(
            "/admin/files/file/upload",
            data={"upload_target_folder": "./"},
            files={"uploaded_files": ("testupload_automated.jpg", f, "image/jpeg")},
        )

        assert response.status_code == 201

        try:
            os.unlink("./testupload_automated.jpg")  # fails if file was not created.
        except Exception as exc:
            raise AssertionError("delete failed, so it was not created before.") from exc


def test_admin_files_upload_fails(client_authenticated: TestClient):
    response = client_authenticated.post(
        "/admin/files/file/upload",
        data={"upload_target_folder": "./"},
        files={},
    )
    assert response.status_code == 400

    with open("tests/assets/input.jpg", "rb") as f:
        response = client_authenticated.post(
            "/admin/files/file/upload",
            data={"upload_target_folder": "./nonexistantfoldertouploadto_automated"},
            files={"uploaded_files": ("testupload_automated.jpg", f, "image/jpeg")},
        )
        assert response.status_code == 400


def test_admin_files_new_folder(client_authenticated: TestClient):
    # make up a list - only filepath needs to be valid for this function.
    target_path = "./userdata"
    new_folder_name = "testfolder_automated_testing"
    new_path = Path(target_path, new_folder_name)

    try:
        os.rmdir(new_path)
    except FileNotFoundError:
        pass  # ignore

    response = client_authenticated.post("/admin/files/folder/new", json=new_path.as_posix())
    assert response.status_code == 201

    response = client_authenticated.post("/admin/files/folder/new", json=new_path.as_posix())
    assert response.status_code == 409  # already exists

    try:
        os.rmdir(new_path)  # fails if dir was not created.
    except Exception as exc:
        raise AssertionError("delete failed, so it was not created before.") from exc


def test_admin_files_delete(client_authenticated: TestClient):
    # create tmp data to delete
    os.makedirs("tmp/test/test/test", exist_ok=True)
    open("./tmp/test/testfile", "a").close()

    selected_files = [
        asdict(PathListItem(name="testfile", filepath="./tmp/test/testfile", is_dir=False, size=0)),  # file
        asdict(PathListItem(name="test", filepath="./tmp/test", is_dir=True, size=0)),  # dir, both types are tested
    ]

    response = client_authenticated.post("/admin/files/delete", json=selected_files)
    assert response.status_code == 204
