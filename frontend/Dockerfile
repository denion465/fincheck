FROM node:20-alpine3.19

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci --silent

COPY . /app

RUN npm run build

EXPOSE 4173

CMD npm run preview
