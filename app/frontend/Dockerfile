FROM node:lts-alpine

WORKDIR /frontend

COPY package*.json .

RUN npm install -P @rollup/rollup-linux-x64-musl 

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]