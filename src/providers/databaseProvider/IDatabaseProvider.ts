import { ICreateDatabaseUserDTO } from "../../modules/database/dtos/ICreateDatabaseUserDTO";

export interface IDatabaseProvider {
  create(database_name: string): Promise<void>;
  delete(database_name: string): Promise<void>;
  createDatabaseUser({
    user,
    password,
    database_name,
  }: ICreateDatabaseUserDTO): Promise<void>;
}
