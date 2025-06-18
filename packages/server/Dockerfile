# packages/server/Dockerfile.dev
FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /snak

COPY . /snak

RUN pnpm install

EXPOSE 3002

CMD ["pnpm", "-w", "run", "prod"]
