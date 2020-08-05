FROM node:12

WORKDIR /app
ADD . ./
RUN yarn install
RUN cd packages/neon-law && \
  GATSBY_ACTIVE_ENV="development" \
  GATSBY_API_URL="http://127.0.0.1:3000/graphql" \
  yarn build

WORKDIR /app/packages/neon-law

EXPOSE 8000

CMD ["yarn", "serve", "-H", "0.0.0.0", "-p", "8000"]
