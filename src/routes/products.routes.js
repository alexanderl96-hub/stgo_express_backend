import express from "express";
import {   createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductByQRCode
 } from "../controllers/products.contollers.js";
import { protect } from "../middleware/auth.middleware.js";
import upload from "../config/multer.js";

// import {

//   getProductByQRCode

// } from "../controllers/products.controllers.js";

const router = express.Router();

// router.get("/", getProducts);
// router.post("/", createOrder);

// router.post("/orders", protect, createOrder);
// router.get("/orders", protect, getOrders);
// router.put("/orders/:id", protect, updateOrder);

router.get("/", getProducts);

router.get("/:id", getProductById);

// router.post("/create", createProduct);
router.post(
  "/create",
  upload.array("images", 10),
  createProduct
);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.get(
  "/qrcode/:id",
  getProductByQRCode
);

export default router;