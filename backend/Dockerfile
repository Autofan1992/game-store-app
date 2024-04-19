FROM node:20-slim AS base
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY yarn.lock /app/
RUN yarn
COPY . /app/

FROM base AS build

RUN yarn db:generate && yarn build

CMD ["node", "dist/index.js"]

FROM build AS deploy

COPY --from=build /app/dist /usr/share/nginx/server/
RUN rm -rf /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d/

CMD ["nginx","-g","daemon off;"]