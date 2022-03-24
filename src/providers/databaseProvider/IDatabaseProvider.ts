import { ICreateDatabaseUserDTO } from "../../dtos/ICreateDatabaseUserDTO";

export interface IDatabaseProvider {
  create(database_name: string): Promise<void>;
  delete(database_name: string): Promise<void>;
  // TODO: add createDatabaseUser method
  //createDatabaseUser({ user, password }: ICreateDatabaseUserDTO): Promise<void>;
}
