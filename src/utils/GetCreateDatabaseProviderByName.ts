import { DatabaseTypes } from "../dtos/ICreateDatabaseDTO";
import { ICreateDatabaseProvider } from "../providers/ICreateDatabaseProvider";
import { CreatePostgresDatabaseProvider } from "../providers/implementations/CreatePostgresDatabaseProvider";

export function getCreateDatabaseProviderByName(
  databaseType: DatabaseTypes
): ICreateDatabaseProvider {
  switch (databaseType) {
    case "postgres":
      return new CreatePostgresDatabaseProvider();
    default:
      throw new Error(`Database type ${databaseType} not supported`);
  }
}
