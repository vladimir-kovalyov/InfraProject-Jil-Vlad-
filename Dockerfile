FROM node:12

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install --only=prod

COPY . .

EXPOSE 3000

CMD [ "node", "bin/www" ]
