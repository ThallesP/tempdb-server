import { AppException } from "./AppException";

export class PasswordInvalidException extends AppException {
  message = "The password provided is invalid";
  name = "PasswordInvalid";
  statusCode = 401;
}
