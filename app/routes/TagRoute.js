import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";
import {
  destroy,
  getAll,
  getWhere,
  store,
  update,
} from "../controllers/TagController.js";
import { MasterTagValidate } from "../utils/validate/MasterTagValidate.js";

const router = express.Router();

router.get("/master/tags", verifyToken, getAll);
router.get("/master/tags/:id", verifyToken, getWhere);
router.post("/master/tags", verifyToken, MasterTagValidate, store);
router.patch("/master/tags/:id", verifyToken, update);
router.delete("/master/tags/:id", verifyToken, destroy);

export default router;