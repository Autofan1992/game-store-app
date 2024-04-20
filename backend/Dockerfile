FROM node:20-slim AS base
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY yarn.lock package.json /app/
RUN yarn
COPY . /app/

FROM base AS build

RUN chmod +x ./startup.sh
CMD ["./startup.sh"]
