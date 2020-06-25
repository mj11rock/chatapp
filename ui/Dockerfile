FROM node:12-alpine

WORKDIR /app/ui/
COPY package.json /app/ui/package.json
COPY package-lock.json /app/ui/package-lock.json
# COPY package-lock.json /app/ui
COPY . /app/ui/
RUN npm install
# RUN npm run build

# EXPOSE 8080
CMD [ "npm", "start" ]