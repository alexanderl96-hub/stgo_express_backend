import express from "express";
import {   createProduct,
  getProducts,
  getProductById,

  updateProduct,

  deleteProduct
 } from "../controllers/products.contollers.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// router.get("/", getProducts);
// router.post("/", createOrder);

// router.post("/orders", protect, createOrder);
// router.get("/orders", protect, getOrders);
// router.put("/orders/:id", protect, updateOrder);

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/create", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;