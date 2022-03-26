import { DatabaseTypes } from "@modules/database/dtos/ICreateDatabaseDTO";
import { IDatabaseProvider } from "@providers/databaseProvider/IDatabaseProvider";
import { PostgresDatabaseProvider } from "@providers/databaseProvider/implementations/CreatePostgresDatabaseProvider";

export function getDatabaseProviderByName(
  databaseType: DatabaseTypes
): IDatabaseProvider {
  switch (databaseType) {
    case "postgres":
      return new PostgresDatabaseProvider();
    default:
      throw new Error(`Database type ${databaseType} not supported`);
  }
}
