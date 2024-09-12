import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";
import {
  destroy,
  getAll,
  getWhere,
  store,
  update,
} from "../controllers/CategoyController.js";

const router = express.Router();

router.get("/master/categories", verifyToken, getAll);
router.get("/master/categories/:id", verifyToken, getWhere);
router.post("/master/categories", verifyToken, store);
router.patch("/master/categories/:id", verifyToken, update);
router.delete("/master/categories/:id", verifyToken, destroy);

export default router;
