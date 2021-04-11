---
title: "LibrePhotos Developer"
excerpt: "How to install LibrePhotos for Developers"
last_modified_at: 2021-3-06
category: 1 
---
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LibrePhotos_ownphotos&metric=alert_status)](https://sonarcloud.io/dashboard?id=LibrePhotos_ownphotos) ![Discord](https://img.shields.io/discord/784619049208250388?style=plastic) ![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&style=plastic&up_color=blue&up_message=online&url=https%3A%2F%2Flibrephotos.com) ![GitHub contributors](https://img.shields.io/github/contributors/librephotos/librephotos?style=plastic)

> Currently the project is in very early stages, some bugs may exist. If you find any please log an issue

## For developers

Create a directory for the project, this is where all the git repositories will be cloned into. For this document we will use `/dev/librephotos` as an example.

Pull frontend code with `git clone https://github.com/LibrePhotos/librephotos-frontend.git ${codedir}/frontend/`

Pull backend code into `git clone https://github.com/LibrePhotos/librephotos.git ${codedir}/backend/`

Pull librephotos-docker repo `git clone https://github.com/LibrePhotos/librephotos-docker.git`

### Setting up in Linux

```bash
codedir=/dev/librephotos
cd ${codedir}
git clone https://github.com/LibrePhotos/librephotos-frontend.git ${codedir}/frontend/
git clone https://github.com/LibrePhotos/librephotos.git ${codedir}/backend/
git clone https://github.com/LibrePhotos/librephotos-docker.git
```

### Setting up in Windows

```powershell
$Env:codedir = "/dev/librephotos"
CD $Env:codedir
git clone https://github.com/LibrePhotos/librephotos-frontend.git $Env:codedir/frontend/
git clone https://github.com/LibrePhotos/librephotos.git $Env:codedir/backend/
git clone https://github.com/LibrePhotos/librephotos-docker.git
```

### Configuring the environment

Set the needed variables in .evn (take librephotos.env as model). Make sure you set the `codedir` variable that tells docker where your source folders are. this should be the same path as used to clone your repos.

Run `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`

This will build images from scratch (can take a long time the first time). Now you can develop and benefit from code auto reload from both backend and frontend

If you already built this image once, when you do force rebuild you have to run the build command based on which area you changed with added dependencies/libraries etc.

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml  build --no-cache frontend
# OR
docker-compose -f docker-compose.yml -f docker-compose.dev.yml  build --no-cache backend
```

Once you have rebuilt, you can run the docker compose up command again to update the running instances.

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

### Visual Studio Code

If you use Visual Studio Code you can also benefit auto completion and other goodies. For this just type `code .` in your dockerfile folder which is `/dev/librephotos/librephotos-docker` using the example path above.

Visual Studio Code will open and ask you if you want to reopen it in the container. If you do it will create the images from scratch (first time you do it can take a couple of minutes) and you will have the same python interpreter librephotos is using internally hence the same installed libraries in auto completion and the same development environment will be shared by all devs including the tools like isort, flake8 and pylint.