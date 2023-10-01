FROM node:16-alpine AS builder

COPY . /app
WORKDIR /app

RUN npm install

FROM node:16-alpine

COPY --from=builder /app /app

EXPOSE 8080
ENTRYPOINT [ "node", "./server.js" ]
