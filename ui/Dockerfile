FROM node:12-alpine

WORKDIR /app/ui/
COPY .env /app/ui/.env
COPY package.json /app/ui/package.json
COPY package-lock.json /app/ui/package-lock.json

# COPY package-lock.json /app/ui
COPY . /app/ui/
RUN npm install
# RUN npm run build

EXPOSE 3006
CMD [ "npm", "start" ]