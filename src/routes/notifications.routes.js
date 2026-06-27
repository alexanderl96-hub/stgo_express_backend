import { Router } from "express";

import {
  getNotifications,
  createNotification,
  readNotification,
  deleteNotification,
} from "../controllers/notifications.controllers.js";

const router = Router();

router.get("/", getNotifications);

router.post("/", createNotification);

router.put("/:id/read", readNotification);

router.delete("/:id", deleteNotification);

export default router;