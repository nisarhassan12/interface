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

ARG APP_NAME

WORKDIR /app
ADD . ./
RUN yarn install --ignore-optional --silent

EXPOSE 8000

ENTRYPOINT [ "./docker/interface.entrypoint.sh" ]

CMD [ "yarn", "workspace", "@neonlaw/${APP_NAME}", "start" ]
