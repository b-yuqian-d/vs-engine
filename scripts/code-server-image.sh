#!/usr/bin/env bash

docker buildx build --no-cache --target runtime --tag 'code-server:latest' .
