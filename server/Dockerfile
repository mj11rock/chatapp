FROM node:12-alpine
# RUN mkdir /app/server/
WORKDIR /app/server
COPY  package.json /app/server/
RUN npm install
COPY . /app/server/
# CMD node index.js
EXPOSE 3000
CMD [ "node", "index.js" ]

