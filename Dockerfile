FROM node:17
WORKDIR /app
ADD ./build .
ADD ./public .
ADD package.json .
ADD yarn.lock .
RUN yarn install
EXPOSE 3000
ENTRYPOINT ["node", "./build/index.js"]
