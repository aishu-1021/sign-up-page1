import request from "supertest";
import app from "../app.js";
import { sequelize } from "../config/database.js";
import { User } from "../models/User.js";
import { Result } from "../models/Result.js";

beforeAll(async () => {
  await sequelize.sync({ force: true });

  // Create user & results for testing
  const user = await User.create({
    name: "Dashboard Tester",
    email: "dashboard@example.com",
    passwordHash: "password123",
  });

  await Result.bulkCreate([
    {
      userId: user.id,
      round: "aptitude",
      score: 85,
      passed: true,
      feedback: "Good performance",
    },
    {
      userId: user.id,
      round: "technical",
      score: 70,
      passed: false,
      feedback: "Needs improvement",
    },
  ]);
});

afterAll(async () => {
  await sequelize.close();
});

describe("Dashboard API", () => {
  let token;

  beforeAll(async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "dashboard@example.com",
      password: "password123",
    });
    token = res.body.token;
  });

  test("Get user dashboard summary", async () => {
    const res = await request(app)
      .get("/api/dashboard")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.aptitude).toBeDefined();
    expect(res.body.aptitude.passed).toBe(true);
    expect(res.body.technical).toBeDefined();
    expect(res.body.technical.passed).toBe(false);
    expect(res.body.interview).toBeNull();
    expect(res.body.hr).toBeNull();
  });
});
