import { DatabaseTypes } from "./ICreateDatabaseDTO";

export interface IDeleteDatabaseDTO {
  database_name: string;
  database_type: DatabaseTypes;
}
