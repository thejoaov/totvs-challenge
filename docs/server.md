<div align="center">
  <h1>Instructions - Server</h1>
</div>

---

## Run locally

To run the app locally, first install dependencies. I personally recomend [yarn](https://yarnpkg.com), but you probably can use npm without any problem.
To install dependencies, run the comand `yarn` or `npm install` inside mobile folder.

To start the server, you will need first to set your environment. Copy the content of the file [.env.example](https://github.com/thejoaov/totvs-challenge/blob/master/server/.env.example) to a new file `.env`.

Set the variables `DB_USER`(Database user),`DB_PASSWORD` (Database password) and `DB_DATABASE` (Database name).

The variable `APP_KEY` _must be generated_ by [Adonis](https://adonisjs.com/), you can install globally with `yarn global add @adonisjs/cli` and `npm i -g @adonisjs/cli`, then `adonis key:generate`, or with npx: `npx @adonisjs/cli key:generate`.

You'll need too a postgres database initialized and configured. If you don't have a postgres database, or you do not want to install it, you can use [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) to have a container with a postgres database. If you choose this way, just run `docker-compose up -d`, and it will initialize a postgres database for you, with the credentials that you already set in the `.env` file.

With the database up, run the [migrations](https://adonisjs.com/docs/4.1/migrations), with `node ace:migration run`. To seed the database with users, and products, run `node ace seed`.

---

## About

The server is built in [NodeJS](https://nodejs.org) with [AdonisJS](https://adonisjs.com/).
