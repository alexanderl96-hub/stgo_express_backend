import express from "express";
import { createOrder, getAllOrders, updateOrder,
    getOrderById, deleteOrder, deleteInOrderAndUser
 } from "../controllers/order.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// router.get("/admin", getOrders);
// router.get("/ordersQR", getOrders)
router.delete(
  "/:customerId/orders/:orderId",
  deleteInOrderAndUser
);

router.post("/create", createOrder);

router.get("/", getAllOrders);

router.get("/:id", getOrderById);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

// router.post("/orders", protect, createOrder);
// router.get("/orders", protect, getOrders);
// router.put("/orders/:id", protect, updateOrder);

export default router;
