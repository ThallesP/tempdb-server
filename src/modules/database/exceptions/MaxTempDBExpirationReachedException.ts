import { AppException } from "@shared/infra/http/exceptions/AppException";

export class MaxTempDBExpirationReachedExpirationException extends AppException {
  message: string =
    "You reached the maximum expiration time for temporary databases.";
  statusCode: number = 400;
  name: string = "MaxTempDBExpirationReachedExpiration";
}
