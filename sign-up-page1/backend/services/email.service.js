import { mailTransport } from "../app.js";
import dotenv from "dotenv";

dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

export async function sendFailAnalysisEmail(userEmail, round, analysis, resources) {
  const subject = `Your ${capitalize(round)} Round Results and Improvement Tips`;
  let resourceList = "";
  if (resources && resources.length > 0) {
    resourceList = resources
      .map((r) => `<li><a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.title}</a></li>`)
      .join("");
  }

  const htmlContent = `
    <p>Dear Candidate,</p>
    <p>Thank you for attempting the <strong>${capitalize(round)} round</strong> of our mock job simulation.</p>
    <p>Unfortunately, you did not clear the cutoff score. Please find below an analysis of your performance:</p>
    <pre style="background:#f4f4f4; padding:10px;">${escapeHtml(analysis)}</pre>
    ${
      resourceList
        ? `<p>Here are some resources to help you improve:</p><ul>${resourceList}</ul>`
        : ""
    }
    <p>We encourage you to review these and try again.</p>
    <p>Best regards,<br/>Mock Job Simulation Team</p>
  `;

  await mailTransport.sendMail({
    from: process.env.SMTP_USER,
    to: userEmail,
    subject,
    html: htmlContent,
  });
}

export async function sendPassQualificationEmail(userEmail, nextRound) {
  let subject = `Congratulations! You Cleared the Round`;
  let body = `
    <p>Dear Candidate,</p>
    <p>Congratulations on clearing the current round!</p>
  `;

  if (nextRound) {
    body += `<p>You have qualified for the <strong>${capitalize(nextRound)} round</strong>. Please visit <a href="${FRONTEND_URL}">${FRONTEND_URL}</a> to proceed with the next round.</p>`;
  } else {
    body += `<p>You have successfully cleared all rounds. We will be in touch with further updates.</p>`;
  }

  body += `<p>Best regards,<br/>Mock Job Simulation Team</p>`;

  await mailTransport.sendMail({
    from: process.env.SMTP_USER,
    to: userEmail,
    subject,
    html: body,
  });
}

export async function sendInterviewFeedbackEmail(userEmail, feedback) {
  const subject = `Your Interview Round Feedback`;

  const htmlContent = `
    <p>Dear Candidate,</p>
    <p>Thank you for participating in the interview round simulation.</p>
    <p>Please find below detailed feedback on your performance:</p>
    <pre style="background:#f4f4f4; padding:10px;">${escapeHtml(feedback)}</pre>
    <p>We encourage you to work on these areas to improve your chances in real interviews.</p>
    <p>Best regards,<br/>Mock Job Simulation Team</p>
  `;

  await mailTransport.sendMail({
    from: process.env.SMTP_USER,
    to: userEmail,
    subject,
    html: htmlContent,
  });
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Escape HTML special characters to prevent injection in email content
function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
