// src/controllers/categories/category.controller.js

import pool from "../../config/db.js";



// CREATE CATEGORY
export const createCategory = async (req, res) => {
  try {

    const {
      category_key,
      name,
      person_in_charge,
      sub_categories,
      filters
    } = req.body;


    // CHECK IF CATEGORY EXISTS
    const existingCategory = await pool.query(
      `
      SELECT * FROM categories
      WHERE category_key = $1
      `,
      [category_key]
    );


    if (existingCategory.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Category already exists"
      });
    }


    // INSERT CATEGORY
    const newCategory = await pool.query(
      `
      INSERT INTO categories
      (
        category_key,
        name,
        person_in_charge,
        sub_categories,
        filters
      )
      VALUES
      ($1,$2,$3,$4,$5)
      RETURNING *
      `,
      [
        category_key,
        name,
        person_in_charge,

        JSON.stringify(sub_categories || []),

        JSON.stringify(filters || [])
      ]
    );


    return res.status(201).json({
      success: true,
      category: newCategory.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// GET ALL CATEGORIES
export const getCategories = async (req, res) => {
  try {

    const categories = await pool.query(
      `
      SELECT *
      FROM categories
      ORDER BY category_id DESC
      `
    );

    return res.status(200).json({
      success: true,
      categories: categories.rows
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// GET CATEGORY BY ID
export const getCategory = async (req, res) => {
  try {

    const { id } = req.params;

    const category = await pool.query(
      `
      SELECT *
      FROM categories
      WHERE category_id = $1
      `,
      [id]
    );


    if (category.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }


    return res.status(200).json({
      success: true,
      category: category.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// UPDATE CATEGORY
export const updateCategory = async (req, res) => {
  try {

    const { id } = req.params;

    const {
      category_key,
      name,
      person_in_charge,
      sub_categories,
      filters
    } = req.body;


    const updatedCategory = await pool.query(
      `
      UPDATE categories
      SET
        category_key = $1,
        name = $2,
        person_in_charge = $3,
        sub_categories = $4,
        filters = $5
      WHERE category_id = $6
      RETURNING *
      `,
      [
        category_key,
        name,
        person_in_charge,

        JSON.stringify(sub_categories || []),

        JSON.stringify(filters || []),

        id
      ]
    );


    if (updatedCategory.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }


    return res.status(200).json({
      success: true,
      category: updatedCategory.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// DELETE CATEGORY
export const deleteCategory = async (req, res) => {
  try {

    const { id } = req.params;

    const deletedCategory = await pool.query(
      `
      DELETE FROM categories
      WHERE category_id = $1
      RETURNING *
      `,
      [id]
    );


    if (deletedCategory.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Category not found"
      });
    }


    return res.status(200).json({
      success: true,
      category: deletedCategory.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};