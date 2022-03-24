import request from "supertest";
import { app } from "../../../src/app";

jest.setTimeout(15 * 1000);
describe("Create Database Controller", () => {
  it("should create random Postgres database", async () => {
    const createDatabaseResponse = await request(app)
      .post("/database")
      .send({ database_type: "postgres", expires_in_milliseconds: 60 * 1000 });

    expect(createDatabaseResponse.status).toBe(201);
    expect(createDatabaseResponse.body).toHaveProperty("database_name");
  });
});
