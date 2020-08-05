FROM python:3.8

RUN \
  echo "deb https://deb.nodesource.com/node_12.x buster main" > /etc/apt/sources.list.d/nodesource.list && \
  wget -qO- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
  wget -qO- https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  apt-get update -qq && \
  apt-get clean &&\
  apt-get install -yqq nodejs yarn && \
  apt-get -y install python libpq-dev netcat postgresql postgresql-contrib &&\
  pip install -U pip && \
  npm i -g npm@^6 && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Environment variables needed to run this API
ENV DATABASE_URL $DATABASE_URL
ENV SHADOW_DATABASE_URL $SHADOW_DATABASE_URL
ENV NODE_ENV $NODE_ENV
ENV SHOW_GRAPHIQL $SHOW_GRAPHIQL

COPY package.json .
RUN yarn install

COPY . .

EXPOSE 3000
ENTRYPOINT [ "./docker/api.entrypoint.sh" ]
CMD [ "yarn", "start" ]
