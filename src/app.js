import express from "express";
import cors from "cors";
import morgan from "morgan";

import customerRoutes from "./routes/customer.routes.js";
import orderRoutes from "./routes/order.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js"
import productsRoutes from "./routes/products.routes.js"
// import adminAuthRoutes from "./routes/admin.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 👇 Serve static images
// app.use("/images", express.static(path.join(__dirname, "src/source")));
app.use("/images", express.static(path.join(__dirname, "source")));

// middlewares
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));

// health check
app.get("/", (req, res) => {
  res.json({ message: "API running 🚀" });
});

// routes
app.use("/api/products", productsRoutes)
// app.use("/api/admin-auth", adminAuthRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

export default app;