import request from "supertest";
import { app } from "../../../src/app";
import { endDatabaseConnections } from "../../../src/database";

jest.setTimeout(15 * 1000);
describe("Create Database Controller", () => {
  afterAll(async () => {
    await endDatabaseConnections();
  });

  it("should create random Postgres database", async () => {
    const createDatabaseResponse = await request(app)
      .post("/database")
      .send({ database_type: "postgres", expires_in: 0 });

    expect(createDatabaseResponse.status).toBe(201);
    expect(createDatabaseResponse.body).toHaveProperty("database_name");
  });
});
