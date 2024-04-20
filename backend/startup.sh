#!/bin/bash

npm run db:generate
npm run db:migrate:deploy
npm run build

npm run start


