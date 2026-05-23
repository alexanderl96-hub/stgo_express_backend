// src/routes/color.routes.js

import express from "express";

import {
  createColor,
  getColors,
  getColor,
  updateColor,
  deleteColor
} from "../controllers/colors/color.controller.js";

const router = express.Router();


// CREATE
router.post("/", createColor);
// GET ALL
router.get("/", getColors);
// GET ONE
router.get("/:id", getColor);
// UPDATE
router.put("/:id", updateColor);
// DELETE
router.delete("/:id", deleteColor);


export default router;