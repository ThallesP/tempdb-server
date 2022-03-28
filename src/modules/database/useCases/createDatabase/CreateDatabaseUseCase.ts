import { ICreateDatabaseDTO } from "../../dtos/ICreateDatabaseDTO";
import { getDatabaseProviderByName } from "../../../../utils/GetDatabaseProviderByName";
import { v4 as uuidV4 } from "uuid";
import { IDatabase } from "../../dtos/IDatabase";
import { DatabaseExpirationQueueProvider } from "../../../../providers/queueProvider/implementations/DatabaseExpirationQueueProvider";
import { inject, injectable } from "tsyringe";
import crypto from "crypto";

@injectable()
export class CreateDatabaseUseCase {
  constructor(
    @inject("BullDatabaseExpirationQueueProvider")
    private readonly queueProvider: DatabaseExpirationQueueProvider
  ) {}

  async execute({
    database_type,
    expires_in_milliseconds,
  }: ICreateDatabaseDTO): Promise<IDatabase> {
    const databaseProvider = getDatabaseProviderByName(database_type);

    const databaseName = uuidV4();
    await databaseProvider.create(databaseName);
    const user = crypto.randomBytes(8).toString("hex");
    const password = crypto.randomBytes(8).toString("hex");
    await databaseProvider.createDatabaseUser({
      user,
      password,
      database_name: databaseName,
    });

    await this.queueProvider.addJobWithDelay(
      { database_type, database_name: databaseName },
      expires_in_milliseconds
    );

    return {
      user,
      password,
      database_name: databaseName,
      expires_in: new Date(Date.now() + expires_in_milliseconds).getTime(),
    };
  }
}
