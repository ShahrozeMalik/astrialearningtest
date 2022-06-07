FROM node:16.13.2-stretch-slim

WORKDIR /app

ADD . /app/

RUN npm install

EXPOSE 5000

CMD [ "node", "index.js" ]