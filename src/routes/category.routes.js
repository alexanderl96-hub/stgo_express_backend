import express from "express";

import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
} from "../controllers/categories/category.controller.js";

const router = express.Router();


// CREATE
router.post("/", createCategory);
// GET ALL
router.get("/", getCategories);
// GET ONE
router.get("/:id", getCategory);
// UPDATE
router.put("/:id", updateCategory);
// DELETE
router.delete("/:id", deleteCategory);


export default router;