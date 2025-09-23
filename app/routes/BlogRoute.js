import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";
import {
  destroy,
  getAll,
  getWhere,
  store,
  update,
} from "../controllers/BlogController.js";
import { validateBlog } from "../utils/validate/BlogValidate.js";

const router = express.Router();

router.get("/blogs", verifyToken, getAll);
router.get("/blogs/:id", verifyToken, getWhere);
router.post("/blogs", validateBlog, store);
router.patch("/blogs/:id", validateBlog, update);
router.delete("/blogs/:id", verifyToken, destroy);

export default router;
