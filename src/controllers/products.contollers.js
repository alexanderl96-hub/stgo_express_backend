import pool from "../config/db.js";

import {
  createNewProduct
} from "../utils/factories.js";



/* =========================================
   CREATE PRODUCT
========================================= */

export const createProduct =
  async (req, res) => {

    try {

      const newProduct =
        createNewProduct(req.body);



      const result =
        await pool.query(
          `
          INSERT INTO products (

            id,

            name,

            description,

            price,

            original_price,

            discount,

            stock,

            rating,

            reviews,

            category,

            sub_category,

            brand,

            gender,

            age_group,

            colors,

            sizes,

            material,

            img,

            total_items,

            sold,

            featured

          )
          VALUES (

            $1, $2, $3, $4, $5,
            $6, $7, $8, $9, $10,
            $11, $12, $13, $14, $15,
            $16, $17, $18, $19, $20,
            $21

          )
          RETURNING *
          `,
          [

            newProduct.id,

            newProduct.name,

            newProduct.description,

            newProduct.price,

            newProduct.originalPrice,

            newProduct.discount,

            newProduct.stock,

            newProduct.rating,

            newProduct.reviews,

            newProduct.category,

            newProduct.subCategory,

            newProduct.brand,

            newProduct.gender,

            newProduct.ageGroup,

            JSON.stringify(
              newProduct.colors
            ),

            JSON.stringify(
              newProduct.sizes
            ),

            newProduct.material,

            JSON.stringify(
              newProduct.img
            ),

            newProduct.totalItems,

            newProduct.sold,

            newProduct.featured
          ]
        );



      return res.status(201).json({

        success: true,

        product: result.rows[0]
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        error: error.message
      });
    }
  };



/* =========================================
   GET PRODUCTS
========================================= */

export const getProducts =
  async (req, res) => {

    try {

      const result =
        await pool.query(
          `
          SELECT *
          FROM products
          ORDER BY created_at DESC
          `
        );



      return res.status(200).json(
        result.rows
      );

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        error: error.message
      });
    }
  };



/* =========================================
   GET PRODUCT BY ID
========================================= */

export const getProductById =
  async (req, res) => {

    try {

      const { id } = req.params;



      const result =
        await pool.query(
          `
          SELECT *
          FROM products
          WHERE id = $1
          `,
          [id]
        );



      if (
        result.rows.length === 0
      ) {
        return res.status(404).json({

          success: false,

          message:
            "Product not found"
        });
      }



      return res.status(200).json(
        result.rows[0]
      );

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        error: error.message
      });
    }
  };



/* =========================================
   UPDATE PRODUCT
========================================= */

export const updateProduct =
  async (req, res) => {

    try {

      const { id } = req.params;

      const data = req.body;



      const result =
        await pool.query(
          `
          UPDATE products

          SET

            name = $1,

            description = $2,

            price = $3,

            stock = $4

          WHERE id = $5

          RETURNING *
          `,
          [

            data.name,

            data.description,

            data.price,

            data.stock,

            id
          ]
        );



      return res.status(200).json({

        success: true,

        product: result.rows[0]
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        error: error.message
      });
    }
  };



/* =========================================
   DELETE PRODUCT
========================================= */

export const deleteProduct =
  async (req, res) => {

    try {

      const { id } = req.params;



      await pool.query(
        `
        DELETE FROM products
        WHERE id = $1
        `,
        [id]
      );



      return res.status(200).json({

        success: true,

        message:
          "Product deleted"
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        error: error.message
      });
    }
  };