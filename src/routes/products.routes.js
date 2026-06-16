import express from "express";
import {   createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  restoreProductsInventory
 } from "../controllers/products.contollers.js";
import { protect } from "../middleware/auth.middleware.js";
import upload from "../config/multer.js";


const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post(
  "/create",
  upload.array("images", 10),
  createProduct
);

router.put(
  "/restore-inventory",
  restoreProductsInventory
);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);




export default router;