import { pgClient } from "../../../database/postgres/connection";
import { IDatabaseProvider } from "../IDatabaseProvider";

export class PostgresDatabaseProvider implements IDatabaseProvider {
  async delete(database_name: string): Promise<void> {
    await pgClient.schema.raw(
      `SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = "${database_name}"`
    );
    await pgClient.schema.raw(`DROP DATABASE "${database_name}"`);
  }

  async create(database_name: string): Promise<void> {
    await pgClient.schema.raw(`CREATE DATABASE "${database_name}"`);
  }
}
