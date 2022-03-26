import "reflect-metadata";
import "@shared/container";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "dotenv/config";
import "@shared/infra/databases/";
import "@shared/infra/queue/process";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});
export { app };
