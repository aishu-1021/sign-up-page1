import { Result } from "../models/Result.js";

export async function getUserDashboard(req, res, next) {
  try {
    const userId = req.user.id;

    const results = await Result.findAll({
      where: { userId },
      order: [["createdAt", "DESC"]],
    });

    // Aggregate results by round (latest result per round)
    const rounds = ["aptitude", "technical", "interview", "hr"];
    const roundSummary = {};

    rounds.forEach((round) => {
      roundSummary[round] = null;
    });

    results.forEach((result) => {
      if (!roundSummary[result.round]) {
        roundSummary[result.round] = {
          score: result.score,
          passed: result.passed,
          feedback: result.feedback,
          date: result.createdAt,
        };
      }
    });

    return res.json(roundSummary);
  } catch (err) {
    next(err);
  }
}
