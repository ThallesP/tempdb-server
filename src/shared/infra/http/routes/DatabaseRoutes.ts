import { Router } from "express";
import { CreateDatabaseController } from "@modules/database/useCases/createDatabase/CreateDatabaseController";

const databaseRoutes = Router();
const createDatabaseController = new CreateDatabaseController();

databaseRoutes.post("/", createDatabaseController.handle);

export { databaseRoutes };
