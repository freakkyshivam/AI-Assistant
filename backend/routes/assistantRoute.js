import express from "express";
import { createAssistant,askToAi } from "../controllers/ai.js";
import { requireAuth } from "../middleware/authVerify.js";

const router = express.Router();

router.post("/create-assistant", requireAuth, createAssistant);
router.post('/ask-to-ai',requireAuth, askToAi);
export default router;
