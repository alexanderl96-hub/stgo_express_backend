import express from "express";
import { getAdmins } from "../controllers/admin.controllers.js";
import { adminLogin } from "../controllers/admin.auth.controller.js";
import { getAdminDashboard } from "../controllers/admin.dashboard.controllers.js";
const router = express.Router();

// router.get("/", getAdmins);
router.post("/login", adminLogin);
router.get("/dashboard", getAdminDashboard); 

// router.post("/", createCustomer);
// router.get("/dashboard", protectAdmin, (req, res) => {
//   res.json({ message: "Admin only data" });
// });

export default router;