#!/bin/bash
set -e

cp -vr ./packages/shared-ui/fonts ./packages/$PACKAGE_NAME/static

yarn

yarn workspace @neonlaw/$PACKAGE_NAME start
