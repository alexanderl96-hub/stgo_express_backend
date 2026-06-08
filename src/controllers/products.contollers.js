import pool from "../config/db.js";

import {
  createNewProduct 
} from "../utils/factories.js";


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
                      ({
                    image_path: file.path,

                    public_id: file.filename
                })
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
      
      const parsedCaracteristics =

        typeof req.body.caracteristics === "string"

          ? JSON.parse(req.body.caracteristics)

          : req.body.caracteristics;
      
      const parsedRecommended =

        typeof req.body.recommended === "string"

          ? JSON.parse(req.body.recommended)

          : req.body.recommended;

      const parsedBatteryDetails =

        typeof req.body.battery_details === "string"

          ? JSON.parse(req.body.battery_details)

          : req.body.battery_details;
      
      const parsedColorsMatch =

        typeof req.body.colors_match === "string"

          ? JSON.parse(req.body.colors_match)

          : req.body.colors_match;


      // CREATE PRODUCT OBJECT
      const newProduct =
        createNewProduct({

          ...req.body,

          colors: parsedColors,

          sizes: parsedSizes,

          img: uploadedImages,

          caracteristics: parsedCaracteristics,

          recommended: parsedRecommended,

          battery_details: parsedBatteryDetails,

          colors_match: parsedColorsMatch

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

            dollar_price,

            current_dollar_price,

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

            colors_match,

            sizes,

            material,

            img,

            total_items,

            sold,

            featured,

            status,

            likes,

            date,

            qrCode,

            store,

            caracteristics,

            recommended,

            battery_details,

            modelo,

            original_store_price

           

          )
          VALUES (

            $1, $2, $3, $4, $5,
            $6, $7, $8, $9, $10,
            $11, $12, $13, $14, $15,
            $16, $17, $18, $19,
            $20, $21, $22, $23, $24, 
            $25, $26, $27, $28, $29,
            $30, $31, $32, $33, $34

          )
          RETURNING *
          `,

          [
            newProduct.id,

            newProduct.name,

            newProduct.description,

            newProduct.price,

            newProduct.dollar_price,

            newProduct.current_dollar_price,

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

            SON.stringify(
              newProduct.colors_match
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

            newProduct.status,

            newProduct.likes,

            newProduct.date,

            newProduct.qrCode,

            newProduct.store,

            JSON.stringify(
              newProduct.caracteristics
            ),

            JSON.stringify(
              newProduct.recommended
            ),

            JSON.stringify(
              newProduct.battery_details
            ),

            newProduct.modelo,

            newProduct.original_store_price
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
            public_id,
            is_main,
            display_order,
            alt_text
          )
          VALUES
          ($1,$2,$3,$4,$5,$6)
          `,

          [

            createdProduct.id,

            uploadedImages[i].image_path,

            uploadedImages[i].public_id,

            i === 0,

            i + 1,

            createdProduct.name
          ]
        );
        }
      }


      // CREATE QR PATH
    const qrCodePath =

    // `http://localhost:3000/qrcode/${createdProduct.id}`;

    `https://stgo-ventas.onrender.com/#/qrcode/${createdProduct.id}`;

    //  `https://ventas-express.netlify.app/details/${createdProduct.id}`;


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

// export const updateProduct = async (req, res) => {

//     try {

//       const { id } = req.params;

//       const data = req.body;


//       const result =
//         await pool.query(
//           `
//           UPDATE products

//           SET

//             name = $1,

//             description = $2,

//             price = $3,

//             stock = $4,

//             discount = $5,

//             rating = $6,

//             reviews = $7,

//             sold = $8,

//             dollar_price = $9,

//             current_dollar_price = $10,

//             original_price = $11,

//             category = $12,

//             sub_category = $13,

//             brand = $14,

//             gender = $15,

//             age_group = $16,

//             colors = $17,

//             sizes = $18,

//             material = $19,

//             img = $20,

//             total_items = $21,

//             featured = $22,

//             store = $23,

//             status = $24,

//             likes = $25, 

//             date = $26

//           WHERE id = $27

//           RETURNING *
//           `,
//           [

//             data.name,

//             data.description,

//             data.price,

//             data.stock,

//             data.discount,

//             data.rating,

//             data.reviews,

//             data.sold,

//             data.dollar_price,

//             data.current_dollar_price,

//             data.original_price ,

//             data.category ,

//             data.sub_category ,

//             data.brand ,

//             data.gender ,

//             data.age_group ,

//             data.colors ,

//             data.sizes ,

//             data.material ,

//             data.img ,

//             data.total_items ,

//             data.featured ,

//             data.store ,

//             data.status ,

//             data.likes , 

//             data.date,

//             id
//           ]
//         );



//       return res.status(200).json({

//         success: true,

//         product: result.rows[0]
//       });

//     } catch (error) {

//       console.log(error);

//       return res.status(500).json({

//         success: false,

//         error: error.message
//       });
//     }
//   };

export const updateProduct =
async (req, res) => {

  try {

    const { id } = req.params;

    const data = req.body;



    // CONVERT EMPTY STRINGS
    // TO NULL
    Object.keys(data).forEach(key => {

      if (data[key] === "") {

        data[key] = null;
      }
    });



    const result =
      await pool.query(

        `
        UPDATE products

        SET

          name =
            COALESCE($1, name),

          description =
            COALESCE($2, description),

          price =
            COALESCE($3, price),

          stock =
            COALESCE($4, stock),

          discount =
            COALESCE($5, discount),

          rating =
            COALESCE($6, rating),

          reviews =
            COALESCE($7, reviews),

          sold =
            COALESCE($8, sold),

          dollar_price =
            COALESCE($9, dollar_price),

          current_dollar_price =
            COALESCE($10, current_dollar_price),

          original_price =
            COALESCE($11, original_price),

          category =
            COALESCE($12, category),

          sub_category =
            COALESCE($13, sub_category),

          brand =
            COALESCE($14, brand),

          gender =
            COALESCE($15, gender),

          age_group =
            COALESCE($16, age_group),

          colors =
            COALESCE($17, colors),

          sizes =
            COALESCE($18, sizes),

          material =
            COALESCE($19, material),

          img =
            COALESCE($20, img),

          total_items =
            COALESCE($21, total_items),

          featured =
            COALESCE($22, featured),

          store =
            COALESCE($23, store),

          status =
            COALESCE($24, status),

          likes =
            COALESCE($25, likes),

          date =
            COALESCE($26, date),

          caracteristics =
            COALESCE($27, caracteristics),

          recommended =
            COALESCE($28, recommended),

          battery_details =
            COALESCE($29, battery_details),

          modelo =
            COALESCE($30, modelo),

          original_store_price =
            COALESCE($31, original_store_price),

          colors_match =
            COALESCE($32, colors_match),

          qrcode =
            COALESCE($33, qrcode)

        WHERE id = $34

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

          data.dollar_price,

          data.current_dollar_price,

          data.original_price,

          data.category,

          data.sub_category,

          data.brand,

          data.gender,

          data.age_group,

          data.colors,

          data.sizes,

          data.material,

          data.img,

          data.total_items,

          data.featured,

          data.store,

          data.status,

          data.likes,

          data.date,

          data.caracteristics,

          data.recommended,

          data.battery_details,

          data.modelo,

          data.original_store_price,

          data.colors_match,

          data.qrCode,
          
          id
        ]
      );



    // PRODUCT NOT FOUND
    if (
      result.rows.length === 0
    ) {

      return res.status(404).json({

        success: false,

        message:
          "Product not found"
      });
    }



    return res.status(200).json({

      success: true,

      product:
        result.rows[0]
    });



  } catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,

      error:
        error.message
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