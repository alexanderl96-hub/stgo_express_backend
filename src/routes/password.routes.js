// src/routes/password.routes.js

import express from "express";

import {
  resetCustomerPassword,
  resetAdminPassword
} from "../controllers/auth/password.controller.js";

const router = express.Router();


// CUSTOMER
router.put(
  "/customer/reset-password",
  resetCustomerPassword
);


// ADMIN
router.put(
  "/admin/reset-password",
  resetAdminPassword
);


export default router;