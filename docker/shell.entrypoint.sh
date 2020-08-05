#!/bin/bash

yarn install
poetry install

exec "$@"
