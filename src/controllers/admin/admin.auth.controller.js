import pool from "../../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET = process.env.JWT_SECRET;


// ADMIN LOGIN
export const adminLogin = async (req, res) => {
  try {

    const {
      email,
      password
    } = req.body;



    // FIND ADMIN
    const result = await pool.query(
      `SELECT * FROM admins WHERE email = $1`,
      [email]
    );

    if (result.rows[0].length === 0) {
      return res.status(401).json({
        message: "Invalid admin credentials by length"
      });
    }


    const admin = result.rows[0];


    // CHECK PASSWORD
    const valid = await bcrypt.compare(
      password,
      admin.password
    );


    if (!valid) {
      return res.status(401).json({
        message: "Invalid admin credentials"
      });
    }


    // CREATE TOKEN
    const token = jwt.sign(
      {
        id: admin.admin_id,
        role: "admin",
        email: admin.email
      },
      SECRET,
      {
        expiresIn: "7d"
      }
    );


    // RESPONSE
    res.status(200).json({
      token,
      user: {
        id: admin.admin_id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        job: admin.job
      }
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};