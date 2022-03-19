import { Client } from "pg";
import { getPostgresClient } from "../../database/postgres/connection";
import { ICreateDatabaseProvider } from "../ICreateDatabaseProvider";

export class CreatePostgresDatabaseProvider implements ICreateDatabaseProvider {
  private client: Client;

  constructor() {
    this.client = getPostgresClient();
  }

  async create(database_name: string): Promise<void> {
    await this.client.query(`CREATE DATABASE "${database_name}"`);
  }
}
