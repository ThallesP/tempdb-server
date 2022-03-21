import { Knex, knex } from "knex";

export let pgClient: Knex;

const pg = knex({
  client: "pg",
  connection: {
    connectionString: process.env.POSTGRES_DATABASE_URL,
  },
});

pgClient = pg;
