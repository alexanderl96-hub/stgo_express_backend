import pool from "../../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET = process.env.JWT_SECRET;

// LOGIN
export const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    
    // FIND USER
    const result = await pool.query(
      `SELECT * FROM customers WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const user = result.rows[0];

    // CHECK PASSWORD
    const valid = await bcrypt.compare(
      password,
      user.password
    );



    if (!valid) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }


    // CREATE TOKEN
    const token = jwt.sign(
      {
        id: user.customer_id,
        email: user.email,
        role: user.role
      },
      SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.status(200).json({
      token,
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

