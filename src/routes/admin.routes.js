import express from "express";
import {
  createAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controllers/admin/admin.controllers.js";
import { adminLogin } from "../controllers/admin/admin.auth.controller.js";
import { getAdminDashboard } from "../middleware/auth.middleware.js";

const router = express.Router();

// Verify credentials
router.post("/register", createAdmin);
router.post("/login", adminLogin);
router.get("/dashboard", getAdminDashboard);
//===============

// GetRoutes

// CREATE
router.get("/", getAdmins);

router.get("/:id", getAdmin);

router.put("/:id", updateAdmin);

router.delete("/:id", deleteAdmin);

export default router;
