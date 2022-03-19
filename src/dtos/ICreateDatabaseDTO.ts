export enum DatabaseTypes {
  Postgres = "postgres",
}

export interface ICreateDatabaseDTO {
  expires_in?: Date;
  database_type: DatabaseTypes;
}
