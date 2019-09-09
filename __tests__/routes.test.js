const request = require("supertest");
const jwt = require("jsonwebtoken");

const server = require("../app.js");
const config = require("../config");
const truncate = require("./util/truncate");
// close the server after each test
afterAll(() => {
  server.close();
});

describe("Routing tests", () => {
  beforeEach(async () => {
    await truncate();
  });
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
        email: "johngasdc2010@hotmail.com",
        favorite_color: "Blue",
        password: "123456"
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(201);
    const decodedToken = jwt.verify(response.body.token, config.jwtSecret);
    expect(decodedToken.id).toEqual(expect.any(Number));
  });
});
