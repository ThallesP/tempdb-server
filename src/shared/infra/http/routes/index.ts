import { Router } from "express";
import { databaseRoutes } from "./DatabaseRoutes";

const router = Router();

router.use("/databases", databaseRoutes);

export { router };