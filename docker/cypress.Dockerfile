FROM node:12

WORKDIR /app
ADD . ./
RUN yarn install
RUN cd packages/interface && \
  GATSBY_ACTIVE_ENV="development" \
  GATSBY_API_URL="http://127.0.0.1:3000/graphql" \
  yarn build

WORKDIR /app/packages/interface

EXPOSE 8000

CMD ["yarn", "serve", "-H", "0.0.0.0", "-p", "8000"]
