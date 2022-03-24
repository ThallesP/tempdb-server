import { ICreateDatabaseDTO } from "../dtos/ICreateDatabaseDTO";
import { getDatabaseProviderByName } from "../utils/GetDatabaseProviderByName";
import { v4 as uuidV4 } from "uuid";
import { IDatabase } from "../dtos/IDatabase";
import { DatabaseExpirationQueueProvider } from "../providers/queueProvider/implementations/DatabaseExpirationQueueProvider";

export class CreateDatabaseService {
  async execute({
    database_type,
    expires_in_milliseconds,
  }: ICreateDatabaseDTO): Promise<IDatabase> {
    const databaseProvider = getDatabaseProviderByName(database_type);
    const queueProvider = DatabaseExpirationQueueProvider.getInstance();

    const databaseName = uuidV4();
    await databaseProvider.create(databaseName);

    await queueProvider.addJobWithDelay(
      "delete-database-after-expiration",
      { database_type, database_name: databaseName },
      expires_in_milliseconds
    );

    return {
      database_name: databaseName,
      expires_in: 0,
    };
  }
}
