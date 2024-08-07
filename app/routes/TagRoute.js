import express from "express";
import {
  destroy,
  getAll,
  getWhere,
  store,
  update,
} from "../controllers/TagController.js";

const router = express.Router();

router.get("/tags", getAll);
router.get("/tags/:id", getWhere);
router.post("/tags", store);
router.patch("/tags/:id", update);
router.delete("/tags/:id", destroy);

export default router;
