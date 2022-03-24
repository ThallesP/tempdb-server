import { DatabaseTypes } from "../dtos/ICreateDatabaseDTO";
import { ICreateDatabaseProvider } from "../providers/databaseProvider/IDatabaseProvider";
import { PostgresDatabaseProvider } from "../providers/databaseProvider/implementations/CreatePostgresDatabaseProvider";

export function getDatabaseProviderByName(
  databaseType: DatabaseTypes
): ICreateDatabaseProvider {
  switch (databaseType) {
    case "postgres":
      return new PostgresDatabaseProvider();
    default:
      throw new Error(`Database type ${databaseType} not supported`);
  }
}
