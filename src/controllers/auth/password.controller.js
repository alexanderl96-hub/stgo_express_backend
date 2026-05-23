import pool from "../../config/db.js";
import bcrypt from "bcryptjs";


// CUSTOMER RESET PASSWORD
export const resetCustomerPassword = async (req, res) => {
  try {

    const {
      email,
      newPassword
    } = req.body;


    // CHECK CUSTOMER
    const customer = await pool.query(
      `
      SELECT * FROM customers
      WHERE email = $1
      `,
      [email]
    );


    if (customer.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Customer not found"
      });
    }


    // HASH NEW PASSWORD
    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );


    // UPDATE PASSWORD
    await pool.query(
      `
      UPDATE customers
      SET password = $1
      WHERE email = $2
      `,
      [
        hashedPassword,
        email
      ]
    );


    return res.status(200).json({
      success: true,
      message: "Customer password updated successfully"
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// ADMIN RESET PASSWORD
export const resetAdminPassword = async (req, res) => {
  try {

    const {
      email,
      newPassword
    } = req.body;


    // CHECK ADMIN
    const admin = await pool.query(
      `
      SELECT * FROM admins
      WHERE email = $1
      `,
      [email]
    );


    if (admin.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Admin not found"
      });
    }


    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );


    // UPDATE PASSWORD
    await pool.query(
      `
      UPDATE admins
      SET password = $1
      WHERE email = $2
      `,
      [
        hashedPassword,
        email
      ]
    );


    return res.status(200).json({
      success: true,
      message: "Admin password updated successfully"
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};