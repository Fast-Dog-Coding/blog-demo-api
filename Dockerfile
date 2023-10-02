FROM node:18-alpine AS builder

COPY . /app
WORKDIR /app

RUN npm ci

FROM node:18-alpine

COPY --from=builder /app /app

EXPOSE 3200
ENTRYPOINT [ "node", "/app/server.js" ]
