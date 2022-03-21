import { pgClient } from "../../database/postgres/connection";
import { ICreateDatabaseProvider } from "../ICreateDatabaseProvider";

export class CreatePostgresDatabaseProvider implements ICreateDatabaseProvider {
  async create(database_name: string): Promise<void> {
    await pgClient.schema.raw(`CREATE DATABASE "${database_name}"`);
  }
}
