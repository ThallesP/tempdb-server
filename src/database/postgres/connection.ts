import { Client } from "pg";

let client: Client;

export async function createPostgresClient() {
  if (!client) {
    client = new Client({
      connectionString: process.env.POSTGRES_DATABASE_URL,
    });

    await client.connect();
  }
}

export function getPostgresClient(): Client {
  return client;
}

export async function endPostgresConnection() {
  await client.end();
}
