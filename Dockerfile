FROM node:13-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk add --no-cache --virtual .gyp python make g++ && npm ci
ADD . /usr/src/app
RUN npm run build

FROM node:13-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build ./
RUN npm install -g serve@11.3.0
CMD ["serve", "-s", ".", "-l", "tcp://0.0.0.0:3000"]

