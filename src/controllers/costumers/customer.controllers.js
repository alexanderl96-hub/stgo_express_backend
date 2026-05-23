import pool from "../../config/db.js";

import { createNewUser } from "../../utils/factories.js";
import bcrypt from "bcryptjs";


// GET ALL CUSTOMERS
export const getCustomers = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT * FROM customers
      ORDER BY customer_id DESC
      `,
    );

    return res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Error fetching customers",
    });
  }
};

// CREATE CUSTOMER
export const createCustomer = async (req, res) => {
  try {
    const { name, email, phone, password, birthday, imagen, address, role } =
      req.body;

    // REQUIRED FIELDS
    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // CHECK IF USER EXISTS
    const existingUser = await pool.query(
      `
        SELECT * FROM customers
        WHERE email = $1
        `,
      [email],
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

     // HASH PASSWORD HERE
    const hashedPassword = await bcrypt.hash(password, 10);
    

    // CREATE USER OBJECT
    const newUser = createNewUser({
      name,
      email,
      phone,
      password: hashedPassword,
      birthday,
      imagen,
      address,
      role,
    });

    // INSERT INTO DATABASE
    const result = await pool.query(
      `
      INSERT INTO customers (
        name,
        email,
        phone,
        password,
        birthday,
        imagen,
        address,
        role,
        user_create,
        "order",
        "orderProccess",
        delivered
      )
      VALUES (
        $1, $2, $3, $4,
        $5, $6, $7, $8,
        $9, $10, $11, $12
      )
      RETURNING *
      `,
      [
        newUser.name,
        newUser.email,
        newUser.phone,
        newUser.password,
        newUser.birthday,
        newUser.imagen,
        newUser.address,
        newUser.role,

        newUser.user_create,

        JSON.stringify(newUser.order),

        JSON.stringify(newUser.orderProccess),

        JSON.stringify(newUser.delivered),
      ],
    );

    return res.status(201).json({
      success: true,
      user: result.rows[0],
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Error creating customer",
    });
  }
};

// GET CUSTOMER BY ID
export const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
          SELECT * FROM customers
          WHERE customer_id = $1
          `,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Error fetching customer",
    });
  }
};

// UPDATE CUSTOMER
export const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, phone, password, birthday, imagen, address, role } =
      req.body;

    const result = await pool.query(
      `
          UPDATE customers
          SET
            name = $1,
            email = $2,
            phone = $3,
            password = $4,
            birthday = $5,
            imagen = $6,
            address = $7,
            role = $8
          WHERE customer_id = $9
          RETURNING *
          `,
      [name, email, phone, password, birthday, imagen, address, role, id],
    );

    return res.status(200).json({
      success: true,
      user: result.rows[0],
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Error updating customer",
    });
  }
};

// DELETE CUSTOMER
export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      `
        DELETE FROM customers
        WHERE customer_id = $1
        `,
      [id],
    );

    return res.status(200).json({
      success: true,
      message: "Customer deleted",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Error deleting customer",
    });
  }
};
