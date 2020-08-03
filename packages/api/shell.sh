#!/bin/bash

while ! nc -z api 3000; do sleep 1; done;

yarn install
tail -f /dev/null
