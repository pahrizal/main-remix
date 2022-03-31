FROM node:17
WORKDIR /web
COPY build/ build/
COPY public/ public/
COPY package.json .
COPY yarn.lock .
RUN yarn install
EXPOSE 3000
ENTRYPOINT ["node", "build/index.js"]
