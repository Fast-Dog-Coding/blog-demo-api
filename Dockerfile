FROM node:18-alpine AS builder

COPY . /app
WORKDIR /app

RUN npm ci

FROM node:18-alpine

COPY --from=builder /app /app
WORKDIR /app

EXPOSE 8080
ENTRYPOINT [ "node", "./server.js" ]
