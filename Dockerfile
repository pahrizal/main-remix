FROM node:17
WORKDIR /app
COPY ./app/ ./app/
COPY ./build/ ./build/
COPY ./public/ ./public/
COPY remix.config.js .
COPY remix.env.d.ts .
COPY server.js .
COPY tailwind.config.js .
COPY tsconfig.json .
COPY package.json .
COPY yarn.lock .
RUN yarn install && yarn build
EXPOSE 3000
ENTRYPOINT ["node", "./build/index.js"]
