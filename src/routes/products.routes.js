import express from "express";
import { getProducts, getOneProduct, createProduct,
    updateOneProduct, deleteOneProduct
 } from "../controllers/products.contollers.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// router.get("/", getProducts);
// router.post("/", createOrder);

// router.post("/orders", protect, createOrder);
// router.get("/orders", protect, getOrders);
// router.put("/orders/:id", protect, updateOrder);

router.get("/", getProducts);

router.get("/:id", getOneProduct);

router.post("/create", createProduct);

router.put("/:id", updateOneProduct);

router.delete("/:id", deleteOneProduct);

export default router;