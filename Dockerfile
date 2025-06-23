FROM node:22.15.1 AS build

RUN apt-get update && apt-get -y install \
    build-essential \
    g++ \
    libx11-dev \
    libxkbfile-dev \
    libsecret-1-dev \
    libkrb5-dev \
    python-is-python3

COPY . /vs-engine
WORKDIR /vs-engine

RUN corepack enable && corepack install && pnpm install

RUN pnpm gulp vscode-server-web
