import express from "express";

import {
  createProductImage,
  getProductImages,
  getProductImagesByProductId,
  updateProductImage,
  deleteProductImage
} from "../controllers/productImages.controller.js";

const router = express.Router();


// CREATE
router.post("/", createProductImage);

// GET ALL
router.get("/", getProductImages);

// GET BY PRODUCT ID
router.get("/product/:productId", getProductImagesByProductId);

// UPDATE
router.put("/:id", updateProductImage);

// DELETE
router.delete("/:id", deleteProductImage);


export default router;