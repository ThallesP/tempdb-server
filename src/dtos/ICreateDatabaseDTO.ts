export enum DatabaseTypes {
  Postgres = "postgres",
}

export interface ICreateDatabaseDTO {
  expires_in_milliseconds?: number;
  database_type: DatabaseTypes;
}
