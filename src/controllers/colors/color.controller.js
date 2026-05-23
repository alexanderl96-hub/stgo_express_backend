// src/controllers/colors/color.controller.js

import pool from "../../config/db.js";



// CREATE COLOR
export const createColor = async (req, res) => {
  try {

    const {
      color_key,
      english_name,
      spanish_name,
      hex_code
    } = req.body;


    // CHECK IF COLOR EXISTS
    const existingColor = await pool.query(
      `
      SELECT * FROM colors
      WHERE color_key = $1
      `,
      [color_key]
    );


    if (existingColor.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Color already exists"
      });
    }


    // INSERT COLOR
    const newColor = await pool.query(
      `
      INSERT INTO colors
      (
        color_key,
        english_name,
        spanish_name,
        hex_code
      )
      VALUES
      ($1,$2,$3,$4)
      RETURNING *
      `,
      [
        color_key,
        english_name,
        spanish_name,
        hex_code
      ]
    );


    return res.status(201).json({
      success: true,
      color: newColor.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};




// GET ALL COLORS
export const getColors = async (req, res) => {
  try {

    const colors = await pool.query(
      `
      SELECT *
      FROM colors
      ORDER BY english_name ASC
      `
    );

    return res.status(200).json({
      success: true,
      colors: colors.rows
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};




// GET COLOR BY ID
export const getColor = async (req, res) => {
  try {

    const { id } = req.params;

    const color = await pool.query(
      `
      SELECT *
      FROM colors
      WHERE color_id = $1
      `,
      [id]
    );


    if (color.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Color not found"
      });
    }


    return res.status(200).json({
      success: true,
      color: color.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};




// UPDATE COLOR
export const updateColor = async (req, res) => {
  try {

    const { id } = req.params;

    const {
      color_key,
      english_name,
      spanish_name,
      hex_code
    } = req.body;


    const updatedColor = await pool.query(
      `
      UPDATE colors
      SET
        color_key = $1,
        english_name = $2,
        spanish_name = $3,
        hex_code = $4
      WHERE color_id = $5
      RETURNING *
      `,
      [
        color_key,
        english_name,
        spanish_name,
        hex_code,
        id
      ]
    );


    if (updatedColor.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Color not found"
      });
    }


    return res.status(200).json({
      success: true,
      color: updatedColor.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};




// DELETE COLOR
export const deleteColor = async (req, res) => {
  try {

    const { id } = req.params;

    const deletedColor = await pool.query(
      `
      DELETE FROM colors
      WHERE color_id = $1
      RETURNING *
      `,
      [id]
    );


    if (deletedColor.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Color not found"
      });
    }


    return res.status(200).json({
      success: true,
      color: deletedColor.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};