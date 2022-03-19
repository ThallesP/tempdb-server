import { ICreateDatabaseUserDTO } from "../dtos/ICreateDatabaseUserDTO";

export interface ICreateDatabaseProvider {
  create(database_name: string): Promise<void>;
  // TODO: add createDatabaseUser method
  //createDatabaseUser({ user, password }: ICreateDatabaseUserDTO): Promise<void>;
}
