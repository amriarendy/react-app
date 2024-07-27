import express from "express";
import {
  destroy,
  getAll,
  getWhere,
  store,
  update,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getAll);
router.get("/users/:id", getWhere);
router.post("/users", store);
router.patch("/users/:id", update);
router.delete("/users/:id", destroy);

export default router;
