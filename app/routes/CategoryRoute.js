import express from "express";
import {
  destroy,
  getAll,
  getWhere,
  store,
  update,
} from "../controllers/CategoyController.js";

const router = express.Router();

router.get("/master/categories", getAll);
router.get("/master/categories/:id", getWhere);
router.post("/master/categories", store);
router.patch("/master/categories/:id", update);
router.delete("/master/categories/:id", destroy);

export default router;
