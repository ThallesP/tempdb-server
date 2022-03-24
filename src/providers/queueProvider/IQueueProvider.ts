export interface IQueueProvider {
  addJob(name: string, data: any): Promise<void>;
  addJobWithDelay(name: string, data: any, delay: number): Promise<void>;
}
