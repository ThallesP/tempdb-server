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
    // TODO: Revoke all users the privileges to connect to the database
  }

  async createDatabaseUser({
    user,
    password,
    database_name,
  }: ICreateDatabaseUserDTO): Promise<void> {
    await pgClient.schema.raw(
      `CREATE USER "${user}" WITH PASSWORD '${password}'`
    );
    // TODO: grant user privileges to the database name
  }
}
