FROM nikolaik/python-nodejs:python3.8-nodejs12

RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
ENV PATH "/root/.poetry/bin:/opt/venv/bin:${PATH}"

WORKDIR /app

COPY package.json .
RUN yarn install

COPY pyproject.toml .
COPY poetry.lock .
RUN poetry install

COPY . .

ENTRYPOINT [ "./docker/shell.entrypoint.sh" ]

CMD [ "tail", "-f", "/dev/null"]
