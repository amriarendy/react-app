import express from "express";
import {
  destroy,
  getAll,
  getWhere,
  store,
  update,
} from "../controllers/BlogController.js";

const router = express.Router();

router.get("/blog", getAll);
router.get("/blog/:id", getWhere);
router.post("/blog", store);
router.patch("/blog/:id", update);
router.delete("/blog/:id", destroy);

export default router;
