#!/usr/bin/env bash

docker buildx build --target runtime --tag 'code-server:latest' .
