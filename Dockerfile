FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json ./package.json

RUN npm install

COPY . .

CMD ["npm", "test"]
