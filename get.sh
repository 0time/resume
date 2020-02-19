#!/usr/bin/env bash

curl \
  -H 'Accept: application/json' \
  http://localhost:3000/$1 2>/dev/null \
  | jq '.about.name'
