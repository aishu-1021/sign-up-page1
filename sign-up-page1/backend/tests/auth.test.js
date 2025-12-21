import request from "supertest";
import app from "../app.js";
import { sequelize } from "../config/database.js";
import { User } from "../models/User.js";

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Auth API", () => {
  const userData = {
    name: "Test User",
    email: "testuser@example.com",
    password: "password123",
  };

  test("Register new user", async () => {
    const res = await request(app).post("/api/auth/register").send(userData);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
  });

  test("Register duplicate email fails", async () => {
    const res = await request(app).post("/api/auth/register").send(userData);
    expect(res.statusCode).toBe(409);
    expect(res.body.message).toMatch(/already exists/i);
  });

  test("Login with correct credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: userData.email, password: userData.password });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
    expect(res.body.user.email).toBe(userData.email);
  });

  test("Login with wrong password fails", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: userData.email, password: "wrongpass" });
    expect(res.statusCode).toBe(401);
    expect(res.body.message).toMatch(/invalid credentials/i);
  });

  test("Get current user with token", async () => {
    const login = await request(app)
      .post("/api/auth/login")
      .send({ email: userData.email, password: userData.password });
    const token = login.body.token;

    const res = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe(userData.email);
  });

  test("Get current user without token fails", async () => {
    const res = await request(app).get("/api/auth/me");
    expect(res.statusCode).toBe(401);
  });
});
