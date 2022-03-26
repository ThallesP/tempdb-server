import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDatabaseUseCase } from "./CreateDatabaseUseCase";

export class CreateDatabaseController {
  async handle(request: Request, response: Response) {
    const { database_type, expires_in_milliseconds } = request.body;

    const createDatabaseUseCase = container.resolve(CreateDatabaseUseCase);

    const database = await createDatabaseUseCase.execute({
      database_type,
      expires_in_milliseconds,
    });

    return response.status(201).json(database);
  }
}
