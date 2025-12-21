import { sequelize } from "../../backend/config/database.js";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

let testTransporter;

export async function setupTestDB() {
  await sequelize.sync({ force: true });
}

export async function teardownTestDB() {
  await sequelize.drop();
  await sequelize.close();
}

export function createMockSMTPServer() {
  // Nodemailer provides a stub transport for tests
  testTransporter = nodemailer.createTransport({
    jsonTransport: true,
  });
  return testTransporter;
}

export function getTestTransporter() {
  return testTransporter;
}
