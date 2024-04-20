#!/bin/bash

command: node -e 'console.log(process.env.DATABASE_URL);'


yarn db:generate && yarn db:migrate && yarn db:seed && yarn build
node dist/index.js
