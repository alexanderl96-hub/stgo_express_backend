import pool from "../../config/db.js";

import { createNewUser, createNewGuestUser } from "../../utils/factories.js";
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

// GET ALL GUEST
export const getCustomersGuest = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT * FROM guest
      ORDER BY guestId DESC
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

// CREATE GUEST
export const createCustomerGuest = async (req, res) => {
  try {
    const { guestId, name, email, phone, address, order } =
      req.body;

    // REQUIRED FIELDS
    if (!guestId || !name || !email || !phone || !order) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // CHECK IF USER EXISTS
    const existingUser = await pool.query(
      `
        SELECT * FROM guest
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

    // CREATE USER OBJECT
    const newUser = createNewGuestUser({
      guestId,
      name,
      email,
      phone,
      address,
      order
    });

    // INSERT INTO DATABASE
    const result = await pool.query(
      `
      INSERT INTO guest (
        guestId,
        name,
        email,
        phone,
        address,
        user_create,
        "order"
      )
      VALUES (
        $1, $2, $3, $4,
        $5, $6, $7
      )
      RETURNING *
      `,
      [
        newUser.guestId,
        newUser.name,
        newUser.email,
        newUser.phone,
        newUser.address,
        newUser.user_create,

        JSON.stringify(newUser.order)
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

    const {
      name,
      email,
      phone,
      password,
      birthday,
      imagen,
      address,
      role,
      user_create,
      order,
      orderProccess,
      delivered
    } = req.body;

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
        role = $8,
        user_create = $9,
        "order" = $10,
        "orderProccess" = $11,
        delivered = $12
      WHERE customer_id = $13
      RETURNING *
      `,
      [
        name,
        email,
        phone,
        password,
        birthday,
        imagen,
        address,
        role,
        user_create,
        JSON.stringify(order || []),
        JSON.stringify(orderProccess || []),
        JSON.stringify(delivered || []),
        id
      ]
    );

    return res.status(200).json({
      success: true,
      user: result.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Error updating customer",
      error: error.message
    });
  }
};

// ADD NEW ORDER TO BY CUSTOMER
export const addCustomerOrder = async (req, res) => {

  try {

    const { id } = req.params;
    const { order } = req.body;

    const customerResult = await pool.query(
      `
      SELECT "order"
      FROM customers
      WHERE customer_id = $1
      `,
      [id]
    );

    if (customerResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Customer not found"
      });
    }

    const currentOrders =
      customerResult.rows[0].order || [];

    const updatedOrders = [
      ...currentOrders,
      order
    ];

    const result = await pool.query(
      `
      UPDATE customers
      SET "order" = $1
      WHERE customer_id = $2
      RETURNING *
      `,
      [
        JSON.stringify(updatedOrders),
        id
      ]
    );

    return res.json({
      success: true,
      customer: result.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      error: error.message
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
