#!/bin/bash

while ! nc -z api 3000; do sleep 1; done;

yarn install
poetry install

exec "$@"
