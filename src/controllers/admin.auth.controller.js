import { administrador, orders, products } from "../../data/db.js";
import jwt from "jsonwebtoken";

const SECRET = "mysecretkey";

// ADMIN LOGIN
export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  const admin = administrador.find(
    (a) => a.email === email && a.password === password
  );

  if (!admin) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  const token = jwt.sign(
    { id: admin.id, role: "admin", email: admin.email },
    SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    token,
    user: {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: "admin",
      job: admin.job
    },
    // orders
    // products
  });
};