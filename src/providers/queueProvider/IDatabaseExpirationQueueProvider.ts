import { IDeleteDatabaseDTO } from "@modules/database/dtos/IDeleteDatabaseDTO";

export interface Job {
  data: IDeleteDatabaseDTO;
}

export interface IDatabaseExpirationQueueProvider {
  addJob(data: IDeleteDatabaseDTO): Promise<void>;
  addJobWithDelay(data: IDeleteDatabaseDTO, delay: number): Promise<void>;
  process(processFunction: (job: Job) => Promise<void>): void;
}
