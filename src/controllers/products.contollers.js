import pool from "../config/db.js";

import {
  createNewProduct,
  // getDollarPrice
} from "../utils/factories.js";

// import { getDollarPrice } from "./dolar.controllers.js"



/* =========================================
   CREATE PRODUCT
========================================= */


export const createProduct = async (req, res) => {

    try {

    //   console.log("BODY:", req.body);

      // SUPPORT BOTH:
      // 1. Uploaded files
      // 2. Manual img array

    const uploadedImages =

            req.files &&
            Array.isArray(req.files) &&
            req.files.length > 0

                ? req.files.map(
                    (file) =>
                    `/images/products/${file.filename}`
                )

                : req.body.img || [];




      // PARSE JSON STRINGS
      // FROM FORMDATA

      const parsedColors =

        typeof req.body.colors === "string"

          ? JSON.parse(req.body.colors)

          : req.body.colors;




      const parsedSizes =

        typeof req.body.sizes === "string"

          ? JSON.parse(req.body.sizes)

          : req.body.sizes;

    // const currentDollarPrice =

    //          await getDollarPrice();

    

    // console.log("current", currentDollarPrice)


      // CREATE PRODUCT OBJECT
      const newProduct =
        createNewProduct({

          ...req.body,

          colors: parsedColors,

          sizes: parsedSizes,

          img: uploadedImages

        //   current_dollar_price: currentDollarPrice
        });




      // INSERT PRODUCT
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

            featured,

            dollar_price,

            current_dollar_price,

            status,

            likes,

            qrcode,

            date,

            store

          )
          VALUES (

            $1, $2, $3, $4, $5,
            $6, $7, $8, $9, $10,
            $11, $12, $13, $14, $15,
            $16, $17, $18, $19,
            $20, $21, $22, $23, $24, 
            $25, $26, $27, $28

          )
          RETURNING *
          `,

          [
            newProduct.id,

            newProduct.name,

            newProduct.description,

            newProduct.price,

            newProduct.original_price,

            newProduct.discount,

            newProduct.stock,

            newProduct.rating,

            newProduct.reviews,

            newProduct.category,

            newProduct.sub_category,

            newProduct.brand,

            newProduct.gender,

            newProduct.age_group,

            JSON.stringify(
              newProduct.colors
            ),

            JSON.stringify(
              newProduct.sizes
            ),

            newProduct.material,

            JSON.stringify(
              uploadedImages
            ),

            newProduct.total_items,

            newProduct.sold,

            newProduct.featured,

            newProduct.dollar_price,

            newProduct.current_dollar_price,

            newProduct.status,

            newProduct.likes,

            newProduct.qrCode,

            newProduct.date,

            newProduct.store
          ]
        );




      // CREATED PRODUCT
      const createdProduct =
        result.rows[0];

      console.log("createdProduct", createdProduct)


      // INSERT IMAGES
      // INTO product_images TABLE

      if (uploadedImages.length > 0) {

        for (

          let i = 0;

          i < uploadedImages.length;

          i++

        ) {

          await pool.query(

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
            `,

            [

              createdProduct.id,

              uploadedImages[i],

              i === 0,

              i + 1,

              createdProduct.name
            ]
          );
        }
      }


      // CREATE QR PATH
    const qrCodePath =

    // `http://localhost:5001/qrcode/${createdProduct.id}`;

    `https://stgo-express-backend.onrender.com/qrcode/${createdProduct.id}`;


    // UPDATE PRODUCT QRCODE
    await pool.query(

    `
    UPDATE products
    SET qrcode = $1
    WHERE id = $2
    `,

    [
        qrCodePath,
        createdProduct.id
    ]
    );




    // UPDATE LOCAL OBJECT
    createdProduct.qrcode =
    qrCodePath;



      return res.status(201).json({

        success: true,

        product: createdProduct
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

export const getProducts = async (req, res) => {

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

export const getProductById = async (req, res) => {

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

export const updateProduct = async (req, res) => {

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

            stock = $4,

            discount = $5,

            rating = $6,

            reviews = $7,

            sold = $8

          WHERE id = $9

          RETURNING *
          `,
          [

            data.name,

            data.description,

            data.price,

            data.stock,

            data.discount,

            data.rating,

            data.reviews,

            data.sold,

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

export const deleteProduct = async (req, res) => {

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



//     try {



//       const { id } = req.params;

//      console.log(req)


//       const result =
//         await pool.query(

//           `
//           SELECT *
//           FROM products
//           WHERE id = $1
//           `,

//           [id]
//         );




//       if (
//         result.rows.length === 0
//       ) {

//         return res.status(404).json({

//           success: false,

//           message:
//             "Product not found"
//         });
//       }




//       return res.status(200).json({

//         success: true,

//         product:
//           result.rows[0]
//       });

//     } catch (error) {

//       console.log(error);

//       return res.status(500).json({

//         success: false,

//         error:
//           error.message
//       });
//     }
//   };