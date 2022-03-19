import { Request, Response } from "express";
import { CreateDatabaseService } from "../services/CreateDatabaseService";

export class CreateDatabaseController {
  async handle(request: Request, response: Response) {
    const { database_type, expires_in } = request.body;

    const createDatabaseService = new CreateDatabaseService();

    const database = await createDatabaseService.execute({
      database_type,
      expires_in,
    });

    return response.status(201).json(database);
  }
}
