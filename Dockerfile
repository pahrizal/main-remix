FROM node:17
WORKDIR /web
COPY ./app/ ./app/
COPY ./public/ ./public/
COPY package.json .
COPY remix.config.js .
COPY remix.env.d.ts .
COPY server.js .
COPY tailwind.config.js .
COPY tsconfig.json .
COPY yarn.lock .
RUN yarn install
RUN yarn build
EXPOSE 3000
ENTRYPOINT ["node", "./build/index.js"]
