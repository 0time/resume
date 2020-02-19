#!/usr/bin/env bash

DIR=$HOME/dev/resume

docker rm -f resume

docker run \
  -d \
  --name resume \
  -v $DIR:/app \
  -p 28090:28090 \
  --restart always \
  -w /app \
  keymux/docker-ubuntu-nvm-yarn \
  yarn start
