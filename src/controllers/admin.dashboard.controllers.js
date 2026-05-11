import { orders, products } from "../../data/db.js";
import jwt from "jsonwebtoken";

const SECRET = "mysecretkey";

export const getAdminDashboard = (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Not admin" });
    }

    res.json({
      orders,
      products
    });

  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};