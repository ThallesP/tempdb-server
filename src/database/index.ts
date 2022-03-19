import {
  createPostgresClient,
  endPostgresConnection,
} from "./postgres/connection";

export async function createDatabaseConnections() {
  await createPostgresClient();
}

export async function endDatabaseConnections() {
  await endPostgresConnection();
}
