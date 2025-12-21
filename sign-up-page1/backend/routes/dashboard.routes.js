import express from "express";
import { getUserDashboard } from "../controllers/dashboard.controller.js";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authenticateJWT, getUserDashboard);

export default router;
