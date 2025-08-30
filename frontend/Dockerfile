FROM node:22.18.0-alpine

WORKDIR /frontend

COPY package*.json .

RUN npm install -P @rollup/rollup-linux-x64-musl 

RUN npm install

COPY . .

CMD ["npm", "run", "start"]