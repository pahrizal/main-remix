FROM node:17
RUN  apt-get update \
    && apt-get install -y unzip
WORKDIR /app
COPY dist.zip .
RUN unzip dist.zip
RUN rm dist.zip
RUN yarn install
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]
