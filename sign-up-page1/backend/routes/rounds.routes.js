import express from "express";
import {
  getRoundQuestions,
  submitRoundAnswers,
} from "../controllers/rounds.controller.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/:round", authenticateJWT, getRoundQuestions);
router.post("/:round/submit", authenticateJWT, submitRoundAnswers);

export default router;
