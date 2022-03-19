import { ICreateDatabaseDTO } from "../dtos/ICreateDatabaseDTO";
import { getCreateDatabaseProviderByName } from "../utils/GetCreateDatabaseProviderByName";
import { v4 as uuidV4 } from "uuid";
import { IDatabase } from "../dtos/IDatabase";

export class CreateDatabaseService {
  async execute({
    database_type,
    expires_in,
  }: ICreateDatabaseDTO): Promise<IDatabase> {
    const createDatabaseProvider =
      getCreateDatabaseProviderByName(database_type);

    const databaseName = uuidV4();

    await createDatabaseProvider.create(databaseName);

    return {
      database_name: databaseName,
      expires_in: 0,
    };
  }
}
