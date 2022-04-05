import express from "express";
import {
  createCategory,
  getAllCategories,
} from "../controllers/categoryController.js";

const router = express.Router();

// router.get("/categories", getAllCategories);
// router.post("/categories", createCategory);

router.route("/").get(getAllCategories).post(createCategory);

export default router;
