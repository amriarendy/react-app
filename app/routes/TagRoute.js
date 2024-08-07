import express from "express";
import {
  destroy,
  getAll,
  getWhere,
  store,
  update,
} from "../controllers/TagController.js";

const router = express.Router();

router.get("/master/tags", getAll);
router.get("/master/tags/:id", getWhere);
router.post("/master/tags", store);
router.patch("/master/tags/:id", update);
router.delete("/master/tags/:id", destroy);

export default router;
