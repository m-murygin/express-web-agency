FROM node:6.9.4

ENV PORT 3000

ADD . /app
WORKDIR /app

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]