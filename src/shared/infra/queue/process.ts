import { DeleteDatabaseUseCase } from "@modules/database/useCases/deleteDatabase/DeleteDatabaseUseCase";
import { IDatabaseExpirationQueueProvider } from "@providers/queueProvider/IDatabaseExpirationQueueProvider";
import { container } from "tsyringe";

const databaseExpirationQueueProvider =
  container.resolve<IDatabaseExpirationQueueProvider>(
    "BullDatabaseExpirationQueueProvider"
  );
const deleteDatabaseUseCase = container.resolve(DeleteDatabaseUseCase);

databaseExpirationQueueProvider.process(
  async ({ data: databaseExpiration }) => {
    await deleteDatabaseUseCase.execute(databaseExpiration);
  }
);
