﻿FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

RUN npm ci --omit=dev || npm install --omit=dev

COPY . .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
