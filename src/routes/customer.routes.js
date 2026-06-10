import express from "express";
import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  addCustomerOrder,
  deleteCustomer,
} from "../controllers/costumers/customer.controllers.js";
import {  login } from "../controllers/costumers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// Verify credentials

router.post("/register", createCustomer);
router.post("/login", login);
router.get("/profile", protect, (req, res) => {
  res.json({ message: "Protected route", user: req.user });
});

//===============

// GetRoutes

router.get("/", getCustomers);

router.get("/:id", getCustomerById);

router.put("/:id", updateCustomer);

router.put("/:id/orders", addCustomerOrder);

router.delete("/:id", deleteCustomer);

export default router;
