import { Knex, knex } from "knex";

export let pgClient: Knex;

const pg = knex({
  client: "pg",
  connection: {
    connectionString: process.env.POSTGRES_DATABASE_URL,
  },
  pool: {
    min: 0,
    max: 5,
    acquireTimeoutMillis: 60000,
    idleTimeoutMillis: 600000,
  },
});

pgClient = pg;
