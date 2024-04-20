#!/bin/bash

yarn db:generate && yarn db:migrate && yarn db:seed && yarn db:studio && yarn build && node dist/index.js
