import { IDeleteDatabaseDTO } from "../dtos/IDeleteDatabaseDTO";
import { getDatabaseProviderByName } from "../utils/GetDatabaseProviderByName";

export class DeleteDatabaseService {
  async execute({ database_type, database_name }: IDeleteDatabaseDTO) {
    const databaseProvider = getDatabaseProviderByName(database_type);

    await databaseProvider.delete(database_name);
  }
}
