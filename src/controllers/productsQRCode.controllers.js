import pool from "../config/db.js";


export const getProductByQRCode = async (req, res) => {

    try {

      const { id } = req.params;

     console.log(req)


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