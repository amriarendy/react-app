import express from "express";
import {
  destroy,
  getAll,
  getWhere,
  store,
  update,
} from "../controllers/BlogController.js";

const router = express.Router();

router.get("/blogs", getAll);
router.get("/blogs/:id", getWhere);
router.post("/blogs", store);
router.patch("/blogs/:id", update);
router.delete("/blogs/:id", destroy);

export default router;
