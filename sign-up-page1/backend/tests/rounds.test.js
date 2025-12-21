import request from "supertest";
import app from "../app.js";
import { sequelize } from "../config/database.js";
import { User } from "../models/User.js";
import { Result } from "../models/Result.js";
import * as emailService from "../services/email.service.js";
import * as aiService from "../services/ai.service.js";

jest.mock("../services/email.service.js");
jest.mock("../services/ai.service.js");

beforeAll(async () => {
  await sequelize.sync({ force: true });

  // Create user for testing
  await User.create({
    name: "Round Tester",
    email: "roundtester@example.com",
    passwordHash: "password123",
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Rounds API", () => {
  let token;

  beforeAll(async () => {
    // Login and get token
    const res = await request(app).post("/api/auth/login").send({
      email: "roundtester@example.com",
      password: "password123",
    });
    token = res.body.token;
  });

  test("Fetch aptitude questions", async () => {
    const res = await request(app)
      .get("/api/rounds/aptitude")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.questions).toBeDefined();
    expect(res.body.cutoff).toBe(80);
  });

  test("Submit aptitude answers - pass case", async () => {
    const answers = ["30", "40 km/h", "30", "7", "12"]; // all correct
    emailService.sendPassQualificationEmail.mockResolvedValue();

    const res = await request(app)
      .post("/api/rounds/aptitude/submit")
      .set("Authorization", `Bearer ${token}`)
      .send({ answers });

    expect(res.statusCode).toBe(200);
    expect(res.body.passed).toBe(true);
    expect(res.body.score).toBe(100);
    expect(emailService.sendPassQualificationEmail).toHaveBeenCalled();
  });

  test("Submit aptitude answers - fail case", async () => {
    const answers = ["20", "50 km/h", "32", "5", "10"]; // all wrong
    emailService.sendFailAnalysisEmail.mockResolvedValue();

    const res = await request(app)
      .post("/api/rounds/aptitude/submit")
      .set("Authorization", `Bearer ${token}`)
      .send({ answers });

    expect(res.statusCode).toBe(200);
    expect(res.body.passed).toBe(false);
    expect(emailService.sendFailAnalysisEmail).toHaveBeenCalled();
  });

  test("Submit interview answers - AI analysis pass", async () => {
    aiService.analyzeInterviewResponses.mockResolvedValue({
      scores: {
        bodyLanguage: 80,
        attitude: 75,
        confidence: 70,
        skills: 85,
        knowledge: 80,
      },
      feedback: {
        bodyLanguage: "Good posture",
        attitude: "Positive",
        confidence: "Confident",
        skills: "Strong",
        knowledge: "Adequate",
      },
      overallScore: 78,
      pass: true,
      suggestions: "Keep up the good work.",
    });

    emailService.sendPassQualificationEmail.mockResolvedValue();

    const answers = [
      "I am a software developer.",
      "I solved a tough bug.",
      "I stay calm under pressure.",
      "My strengths are problem-solving.",
      "I want to work here because of growth.",
    ];

    const res = await request(app)
      .post("/api/rounds/interview/submit")
      .set("Authorization", `Bearer ${token}`)
      .send({ answers });

    expect(res.statusCode).toBe(200);
    expect(res.body.passed).toBe(true);
    expect(emailService.sendPassQualificationEmail).toHaveBeenCalled();
  });

  test("Submit interview answers - AI analysis fail", async () => {
    aiService.analyzeInterviewResponses.mockResolvedValue({
      scores: {
        bodyLanguage: 40,
        attitude: 35,
        confidence: 30,
        skills: 25,
        knowledge: 20,
      },
      feedback: {
        bodyLanguage: "Poor posture",
        attitude: "Negative",
        confidence: "Low",
        skills: "Weak",
        knowledge: "Insufficient",
      },
      overallScore: 30,
      pass: false,
      suggestions: "Work on communication skills.",
    });

    emailService.sendInterviewFeedbackEmail.mockResolvedValue();

    const answers = [
      "I don't have much to say.",
      "I gave up on problems.",
      "I get very nervous.",
      "I don't have skills.",
      "I don't know much about the company.",
    ];

    const res = await request(app)
      .post("/api/rounds/interview/submit")
      .set("Authorization", `Bearer ${token}`)
      .send({ answers });

    expect(res.statusCode).toBe(200);
    expect(res.body.passed).toBe(false);
    expect(emailService.sendInterviewFeedbackEmail).toHaveBeenCalled();
  });
});
