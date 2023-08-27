const request = require("supertest");
const { app, CLIENT_PORT, SERVER_PORT } = require("../src/frontend.js");

describe("GET Requests", () => {
  it("should respond with a 200 status code when accessing the root path", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
