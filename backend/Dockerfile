FROM node:22.18.0-alpine

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]