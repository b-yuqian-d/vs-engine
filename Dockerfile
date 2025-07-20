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

RUN corepack enable && corepack install && pnpm config set store-dir '/pnpm'

RUN --mount=type=cache,id=pnpm-store,target=/pnpm \
    pnpm store path && pnpm install

RUN pnpm gulp compile-build-without-mangling
RUN pnpm gulp minify-vscode-server-web
RUN pnpm gulp vscode-server-web-ci

FROM debian:12 AS runtime
ARG TARGETOS
ARG TARGETARCH

COPY --from=build /vs-engine/out-packages/vscode-server-web-${TARGETOS}-${TARGETARCH} /code-server/
WORKDIR /code-server

EXPOSE 8000/tcp
EXPOSE 8000/udp

ENTRYPOINT ["/code-server/node", "/code-server/out/server-main.js"]
CMD ["--host", "0.0.0.0", "--port", "8000"]
