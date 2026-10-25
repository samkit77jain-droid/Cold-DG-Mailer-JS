import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { deleteEmail, generateEmails, getEmailById, getMyEmails, updateEmail } from "../controller/mail.controller.js";
import { sendEmail } from "../services/email.service.js";

const router = express.Router();

router.post("/generate", authMiddleware, generateEmails);
router.get("/", authMiddleware,getMyEmails);
router.get("/", authMiddleware,getEmailById);
router.get("/:id", authMiddleware, updateEmail);
router.get("/:id", authMiddleware, deleteEmail);
router.get("/send",authMiddleware, sendEmail);
export default router



