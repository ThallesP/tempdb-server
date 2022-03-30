import { Request, Response, NextFunction } from "express";
import { PasswordInvalidException } from "../exceptions/PasswordInvalidException";

export function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (process.env.PASSWORD_AUTHENTICATION === "none") return;

  const [bearer, password] = request.headers["authorization"].split(" ");

  if (bearer === "Bearer" && password === process.env.PASSWORD_AUTHENTICATION) {
    next();
    return;
  }

  throw new PasswordInvalidException();
}
