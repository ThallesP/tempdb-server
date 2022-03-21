import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "dotenv/config";
import "./database/";
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
