FROM node:12-buster AS build

ARG GATSBY_ACTIVE_ENV
ARG GATSBY_AUTH0_CALLBACK
ARG GATSBY_AUTH0_DOMAIN
ARG GATSBY_AUTH0_CLIENT_ID
ARG APP_NAME
ENV APP_NAME=$APP_NAME

WORKDIR /app
ADD . ./
RUN yarn install --ignore-optional --silent
RUN cd packages/$APP_NAME && yarn build

FROM nginx
COPY --from=build /app/packages/$APP_NAME/public /usr/share/nginx/html
COPY staging.nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
