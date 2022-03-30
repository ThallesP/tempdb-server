import "reflect-metadata";
import "@shared/container";
import express, { NextFunction, Request, Response } from "express";
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import "express-async-errors";
import "dotenv/config";
import "@shared/infra/databases/";
import "@shared/infra/queue/process";
import { router } from "./routes";
import { AppException } from "./exceptions/AppException";

const app = express();
Sentry.init({
  enabled: process.env.SENTRY_DSN ? true : false,
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});
app.use(express.json());
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(router);

app.use(Sentry.Handlers.errorHandler());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppException) {
    return res.status(err.statusCode).json({
      name: err.name,
      message: err.message,
    });
  }

  return res.status(500).json({
    name: "InternalServerError",
    message: "Internal Server Error",
  });
});
export { app };
