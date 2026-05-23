import pool from "../../config/db.js";
import bcrypt from "bcryptjs";

import { createNewAdmin } from "../../utils/factories.js";

// CREATE ADMIN
export const createAdmin = async (req, res) => {
  try {
    const { name, email, phone, password, birthday, imagen, address, user_create, role, job } =
      req.body;

    // CHECK IF ADMIN EXISTS
    const adminExist = await pool.query(
      `SELECT * FROM admins WHERE email = $1`,
      [email],
    );

    if (adminExist.rows.length > 0) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }

        // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);


    // CREATE ADMIN OBJECT
    const adminData = createNewAdmin({
      name,
      email,
      phone,
      password: hashedPassword,
      birthday,
      imagen,
      address,
      user_create,
      role,
      job
    });

    // INSERT INTO DATABASE
    const newAdmin = await pool.query(
      `
      INSERT INTO admins
      (
        name,
        email,
        phone,
        password,
        birthday,
        imagen,
        address,
        role,
        user_create,
        job
      )
      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      RETURNING *
      `,
      [
        adminData.name,
        adminData.email,
        adminData.phone,
        adminData.password,
        adminData.birthday,
        adminData.imagen,
        adminData.address,
        adminData.role,
        adminData.user_create,
        adminData.job
      ],
    );

    res.status(201).json({
      message: "Admin created successfully",
      admin: newAdmin.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL ADMINS
export const getAdmins = async (req, res) => {
  try {
    const admins = await pool.query(
      `SELECT * FROM admins ORDER BY admin_id DESC`,
    );

    res.status(200).json(admins.rows);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ADMIN BY ID
export const getAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const admin = await pool.query(`SELECT * FROM admins WHERE admin_id = $1`, [
      id,
    ]);

    if (admin.rows.length === 0) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    res.status(200).json(admin.rows[0]);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE ADMIN
export const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, phone, password, birthday, imagen, address, role } =
      req.body;

    const updatedAdmin = await pool.query(
      `
      UPDATE admins
      SET
        name = $1,
        email = $2,
        phone = $3,
        password = $4,
        birthday = $5,
        imagen = $6,
        address = $7,
        role = $8
      WHERE admin_id = $9
      RETURNING *
      `,
      [name, email, phone, password, birthday, imagen, address, role, id],
    );

    if (updatedAdmin.rows.length === 0) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    res.status(200).json({
      message: "Admin updated successfully",
      admin: updatedAdmin.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE ADMIN
export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAdmin = await pool.query(
      `
      DELETE FROM admins
      WHERE admin_id = $1
      RETURNING *
      `,
      [id],
    );

    if (deletedAdmin.rows.length === 0) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    res.status(200).json({
      message: "Admin deleted successfully",
      admin: deletedAdmin.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
