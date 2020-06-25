FROM node:12-alpine
# RUN mkdir /app/bot
WORKDIR /app/bot/
COPY ./package.json ./app/bot/package.json
COPY ./package-lock.json ./app/bot/package-lock.json
COPY . /app/bot/
RUN npm install
CMD ["node", "index.js"]