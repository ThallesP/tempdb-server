import { IDeleteDatabaseDTO } from "@modules/database/dtos/IDeleteDatabaseDTO";
import { redisConnection } from "@shared/infra/redis/connection";
import { Queue, QueueScheduler, Worker } from "bullmq";
import { injectable } from "tsyringe";
import {
  IDatabaseExpirationQueueProvider,
  Job,
} from "../IDatabaseExpirationQueueProvider";

@injectable()
export class DatabaseExpirationQueueProvider
  implements IDatabaseExpirationQueueProvider
{
  private queue: Queue;
  private queueName = "delete-database-after-expiration";

  constructor() {
    this.queue = new Queue(this.queueName, {
      connection: redisConnection,
    });
    new QueueScheduler(this.queueName, { connection: redisConnection });
  }

  async addJob(data: IDeleteDatabaseDTO): Promise<void> {
    await this.queue.add(this.queueName, data);
  }

  async addJobWithDelay(
    data: IDeleteDatabaseDTO,
    delay: number
  ): Promise<void> {
    await this.queue.add(this.queueName, data, { delay });
  }

  process(processFunction: (job: Job) => Promise<void>): void {
    new Worker(this.queueName, processFunction, {
      connection: redisConnection,
    });
  }
}
