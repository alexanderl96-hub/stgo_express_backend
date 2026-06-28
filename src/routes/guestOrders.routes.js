import { Router } from "express";

import {
  createGuestOrder,
  getGuestOrders,
  getGuestOrder,
  updateGuestOrder,
  deleteGuestOrder,
  deleteMany
} from "../controllers/guestOrders.controllers.js";

const router = Router();

router.post("/create", createGuestOrder);

router.get("/", getGuestOrders);

router.get("/:id", getGuestOrder);

router.put("/:id", updateGuestOrder);

router.delete("/:id", deleteGuestOrder);

router.delete("/delete-many", deleteMany);

export default router;