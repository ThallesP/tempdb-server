import { Router } from "express";
import { CreateDatabaseController } from "./controllers/CreateDatabaseController";

const router = Router();
const createDatabaseController = new CreateDatabaseController();

router.post("/database/", createDatabaseController.handle);

export { router };
