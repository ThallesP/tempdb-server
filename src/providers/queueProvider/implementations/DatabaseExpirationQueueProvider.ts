import { Queue, Worker } from "bullmq";
import { DeleteDatabaseService } from "../../../services/DeleteDatabaseService";
import { IQueueProvider } from "../IQueueProvider";

export class DatabaseExpirationQueueProvider implements IQueueProvider {
  private static INSTANCE: DatabaseExpirationQueueProvider;
  private queue: Queue;

  private constructor() {
    this.queue = new Queue("delete-database-after-expiration");

    const deleteDatabaseService = new DeleteDatabaseService();
    new Worker("delete-database-after-expiration", async (job) => {
      await deleteDatabaseService.execute(job.data);
    });
  }

  static getInstance(): DatabaseExpirationQueueProvider {
    if (!DatabaseExpirationQueueProvider.INSTANCE) {
      DatabaseExpirationQueueProvider.INSTANCE =
        new DatabaseExpirationQueueProvider();
    }

    return DatabaseExpirationQueueProvider.INSTANCE;
  }

  async addJob(name: string, data: any): Promise<void> {
    await this.queue.add(name, data);
  }

  async addJobWithDelay(name: string, data: any, delay: number): Promise<void> {
    await this.queue.add(name, data, { delay });
  }
}
