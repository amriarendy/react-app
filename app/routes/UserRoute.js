import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";
import {
  destroy,
  getAll,
  getWhere,
  store,
  update,
} from "../controllers/UserController.js";
import { validateAddUser, validateUpdateUser } from "../utils/validate/UserValidate.js";

const router = express.Router();

router.get("/users", verifyToken, getAll);
router.get("/users/:id", verifyToken, getWhere);
router.post("/users", validateAddUser, store);
router.patch("/users/:id", validateUpdateUser, update);
router.delete("/users/:id", verifyToken, destroy);

export default router;
