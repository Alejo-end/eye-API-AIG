FROM node:14-alpine
WORKDIR frontend/
COPY package* yarn.lock ./
RUN yarn install
COPY . .
CMD yarn start
