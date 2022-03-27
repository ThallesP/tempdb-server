import "reflect-metadata";
import "@shared/container";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "dotenv/config";
import "@shared/infra/databases/";
import "@shared/infra/queue/process";
import { router } from "./routes";
import { AppException } from "./exceptions/AppException";

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppException) {
    return res.status(err.statusCode).json({
      name: err.name,
      message: err.message,
    });
  }

  console.log(err);
  return res.status(500).json({
    name: "InternalServerError",
    message: "Internal Server Error",
  });
});
export { app };
