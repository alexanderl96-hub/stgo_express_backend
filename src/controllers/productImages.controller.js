// src/controllers/products/productImages.controller.js

import pool from "../config/db.js";


// CREATE PRODUCT IMAGE
export const createProductImage = async (req, res) => {
  try {

    const {
      product_id,
      image_path,
      is_main,
      display_order,
      alt_text
    } = req.body;


    // CHECK PRODUCT EXISTS
    const product = await pool.query(
      `
      SELECT * FROM products
      WHERE id = $1
      `,
      [product_id]
    );


    if (product.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }


    // INSERT IMAGE
    const newImage = await pool.query(
      `
      INSERT INTO product_images
      (
        product_id,
        image_path,
        is_main,
        display_order,
        alt_text
      )
      VALUES
      ($1,$2,$3,$4,$5)
      RETURNING *
      `,
      [
        product_id,
        image_path,
        is_main || false,
        display_order || 0,
        alt_text || ""
      ]
    );


    return res.status(201).json({
      success: true,
      image: newImage.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};




// GET ALL PRODUCT IMAGES
export const getProductImages = async (req, res) => {
  try {

    const images = await pool.query(
      `
      SELECT *
      FROM product_images
      ORDER BY display_order ASC
      `
    );


    return res.status(200).json({
      success: true,
      images: images.rows
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};




// GET IMAGES BY PRODUCT ID
export const getProductImagesByProductId = async (req, res) => {
  try {

    const { productId } = req.params;

    const images = await pool.query(
      `
      SELECT *
      FROM product_images
      WHERE product_id = $1
      ORDER BY display_order ASC
      `,
      [productId]
    );


    return res.status(200).json({
      success: true,
      images: images.rows
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};




// UPDATE PRODUCT IMAGE
export const updateProductImage = async (req, res) => {
  try {

    const { id } = req.params;

    const {
      image_path,
      is_main,
      display_order,
      alt_text
    } = req.body;


    const updatedImage = await pool.query(
      `
      UPDATE product_images
      SET
        image_path = $1,
        is_main = $2,
        display_order = $3,
        alt_text = $4
      WHERE image_id = $5
      RETURNING *
      `,
      [
        image_path,
        is_main,
        display_order,
        alt_text,
        id
      ]
    );


    if (updatedImage.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Image not found"
      });
    }


    return res.status(200).json({
      success: true,
      image: updatedImage.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};




// DELETE PRODUCT IMAGE
export const deleteProductImage = async (req, res) => {
  try {

    const { id } = req.params;

    const deletedImage = await pool.query(
      `
      DELETE FROM product_images
      WHERE image_id = $1
      RETURNING *
      `,
      [id]
    );


    if (deletedImage.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Image not found"
      });
    }


    return res.status(200).json({
      success: true,
      image: deletedImage.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};