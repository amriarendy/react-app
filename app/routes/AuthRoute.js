import express from "express";
import {
  signIn,
  signOut,
  register,
  verifyEmail,
  resetPassword,
} from "../controllers/AuthController.js";

const router = express.Router();

router.post("/login", signIn);
router.post("/register", register);
router.post("/email-verify", verifyEmail);
router.post("/reset-password", resetPassword);
router.post("/logout", signOut);

export default router;
