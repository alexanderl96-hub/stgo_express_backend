import pool from "../config/db.js";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const getAdminDashboard = async (req, res) => {

  const authHeader = req.headers.authorization;


  // CHECK TOKEN
  if (!authHeader) {
    return res.status(401).json({
      message: "No token"
    });
  }


  const token = authHeader.split(" ")[1];


  try {

    // VERIFY TOKEN
    const decoded = jwt.verify(token, SECRET);


    // CHECK ROLE
    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Not admin"
      });
    }


    // GET DATA FROM DATABASE
    const orders = await pool.query(
      `SELECT * FROM orders ORDER BY id DESC`
    );

    const products = await pool.query(
      `SELECT * FROM products ORDER BY id DESC`
    );

    const admins = await pool.query(
      `SELECT * FROM admins ORDER BY admin_id DESC`
    );

    const customers = await pool.query(
      `SELECT * FROM customers ORDER BY customer_id DESC`
    );


    // RESPONSE
    res.status(200).json({
      admin: decoded,
      orders: orders.rows,
      products: products.rows,
      admins: admins.rows,
      customers: customers.rows
    });

  } catch (err) {

    return res.status(401).json({
      message: "Invalid token"
    });

  }
};
