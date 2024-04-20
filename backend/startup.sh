#!/bin/bash

yarn db:generate && yarn db:migrate && yarn db:seed && yarn build
node dist/index.js
