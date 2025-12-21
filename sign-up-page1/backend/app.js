import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import authRoutes from "./routes/auth.routes.js";
import roundsRoutes from "./routes/rounds.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import { sequelize } from "./config/database.js";
import { errorHandler } from "./middleware/error.middleware.js";
import nodemailer from "nodemailer";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());

// Initialize Sequelize connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

// Setup nodemailer transport
export const mailTransport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Setup OpenAI client
const openAiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(openAiConfig);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/rounds", roundsRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

// Global error handler
app.use(errorHandler);

export default app;
