const request = require("supertest");
const server = require("../app.js");
const jwt = require("jsonwebtoken");
const config = require("../config");

// close the server after each test
afterAll(() => {
  server.close();
});

describe("Routing tests", () => {
  test("get home route GET /", async () => {
    const response = await request(server).get("/api");
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual("Api funcionando =)");
  });

  test("registers a user", async () => {
    const response = await request(server)
      .post("/api/register")
      .send({
        name: "john",
        email: "johngc2010@hotmail.com",
        favorite_color: "Blue",
        password: "123456"
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(201);
    expect(jwt.verify(response.body.token, config.secret)).toBe(true);
  });
});
