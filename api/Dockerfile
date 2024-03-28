FROM node:20-alpine3.19

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci --silent

COPY . /app

RUN npm run build
RUN npx prisma generate

CMD npm run start:prod
