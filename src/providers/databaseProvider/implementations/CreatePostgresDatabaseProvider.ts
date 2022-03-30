import { ICreateDatabaseUserDTO } from "@modules/database/dtos/ICreateDatabaseUserDTO";
import { pgClient } from "../../../shared/infra/databases/postgres/connection";
import { IDatabaseProvider } from "../IDatabaseProvider";

export class PostgresDatabaseProvider implements IDatabaseProvider {
  async delete(database_name: string): Promise<void> {
    await pgClient.schema.raw(
      `SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '${database_name}'`
    );
    await pgClient.schema.raw(`DROP DATABASE "${database_name}"`);
  }

  async create(database_name: string): Promise<void> {
    await pgClient.schema.raw(`CREATE DATABASE "${database_name}"`);
    await pgClient.schema.raw(
      `REVOKE connect ON DATABASE "${database_name}" FROM PUBLIC`
    );
  }

  async createDatabaseUser({
    user,
    password,
    database_name,
  }: ICreateDatabaseUserDTO): Promise<void> {
    await pgClient.schema.raw(
      `CREATE USER "${user}" WITH PASSWORD '${password}'`
    );
    await pgClient.schema.raw(
      `GRANT connect ON DATABASE "${database_name}" TO "${user}"`
    );
  }
}
