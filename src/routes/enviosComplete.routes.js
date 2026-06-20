import {
  Router
} from "express";

import {
  getEnviosComplete,
  getEnvioComplete,
  createEnvioComplete,
  updateEnvioComplete,
  deleteEnvioComplete
} from "../controllers/enviosComplete.controllers.js";

const router = Router();

router.get(
  "/",
  getEnviosComplete
);

router.get(
  "/:id",
  getEnvioComplete
);

router.post(
  "/",
  createEnvioComplete
);

router.put(
  "/:id",
  updateEnvioComplete
);

router.delete(
  "/:id",
  deleteEnvioComplete
);

export default router;