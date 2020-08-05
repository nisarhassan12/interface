FROM node:12

RUN apt-get update -qq &&\
  apt-get -y install python libpq-dev netcat postgresql postgresql-contrib &&\
  apt-get clean &&\
  rm -rf /var/lib/apt/lists/**

RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY pyproject.toml .
COPY poetry.lock .
RUN poetry install

COPY . .

ENTRYPOINT [ "./docker/shell.entrypoint.sh" ]

CMD [ "tail", "-f", "/dev/null"]
