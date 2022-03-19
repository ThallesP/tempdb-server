import express from "express";
import "dotenv/config";
import { createDatabaseConnections } from "./database/";
import { router } from "./routes";

const app = express();
createDatabaseConnections();

app.use(express.json());
app.use(router);

export { app };
