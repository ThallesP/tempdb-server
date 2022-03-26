import { IDatabaseExpirationQueueProvider } from "@providers/queueProvider/IDatabaseExpirationQueueProvider";
import { DatabaseExpirationQueueProvider } from "@providers/queueProvider/implementations/DatabaseExpirationQueueProvider";
import { container } from "tsyringe";

container.registerSingleton<IDatabaseExpirationQueueProvider>(
  "BullDatabaseExpirationQueueProvider",
  DatabaseExpirationQueueProvider
);
