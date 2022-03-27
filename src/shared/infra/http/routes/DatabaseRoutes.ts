import { Router } from "express";
import { CreateDatabaseController } from "@modules/database/useCases/createDatabase/CreateDatabaseController";
import { ensureAuthentication } from "../middlewares/EnsureAuthentication";

const databaseRoutes = Router();
const createDatabaseController = new CreateDatabaseController();

databaseRoutes.post("/", ensureAuthentication, createDatabaseController.handle);

export { databaseRoutes };
