FROM node:20-slim AS base
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY yarn.lock package.json /app/
RUN yarn
COPY . /app/

FROM base AS build

RUN yarn db:generate && yarn build

CMD ["node", "dist/index.js"]
