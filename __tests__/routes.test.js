const request = require("supertest");
const server = require("../app.js");
// close the server after each test
afterAll(() => {
  server.close();
});

describe("basic route tests", () => {
  test("get home route GET /", async () => {
    const response = await request(server).get("/api");
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual("Api funcionando =)");
  });
});
