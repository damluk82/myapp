#/bin/bash

rm -rf ./node_modules &&
npm cache clear --force &&
rm -rf package-lock.json &&
npm install
