# Neon Law API

This repo contains a GraphQL API and backgroud workers powered by
Postgraphile that is used by our [interface
repository](https://github.com/NeonLaw/interface).

## Getting Started

### Environment Variables

To run our application successfully while developing, you will need to create
an Auth0 tenant, and an application for machine-to-machine authentication.
You will then need to set the following environment variables on your machine
before running `docker-compose up` as detailed below.

* AUTH0_CLIENT_ID - the ID of the machine-to-machine Auth0 application
* AUTH0_CLIENT_SECRET - the Secret of the machine-to-machine Auth0 application
* AUTH0_TENANT - the Tenant used to store user authentication information

### Docker && Docker Compose

Install Docker and Docker Compose, if you are on a Mac, you can install it
with Docker for Desktop. Then in this folder you can run:

```bash
docker-compose up
```

This will start a development server on `localhost:3000` and expose a
Postgres database on `localhost:5432` that you can use with native database
tools like PgAdmin or DBBeaver.

### Creating a migration

To create a migration using `graphile-migrate` you must first enter a bash
session in the `api` container. You can do so via:

```bash
docker exec -it api /bin/bash
```

Once that command is executed, you should see a new bash session at
`/usr/src/app`.

From there, you can run `yarn run graphile-migrate watch` and make changes to
the `migrations/current.sql` file. At first, it may seem unusual to have a
the `watch` process look for changes. However, it is the library's intent to
have you write idempotent migrations, so the code should be the same upon
every iteration. Once you are satisfied with your changes, you can then
terminated the `yarn run graphile-migrate watch` process and run
`yarn run graphile-migrate commit`, which will commit the migration.

### Using the shell

You can run `docker exec -it shell /bin/bash` to start a bash session sourced
with the same codebase. It is here you can run the migrations in the step
above, and any other command line arguments like `yarn test` and
`yarn lint --fix`.

You can also connect to the database from the shell container with:
`psql $DATABASE_URL`.

## TODO

- [ ] Look into smart comment issue for delete
- [ ] Look to smart comment issue for documentation
