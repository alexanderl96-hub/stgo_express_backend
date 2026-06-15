import pool from "../config/db.js";

import {
  createNewOrder
} from "../utils/factories.js";



/* =========================================
   CREATE ORDER
========================================= */
export const createOrder = async (req, res) => {
  try {

    const {
      id,
      qrcode,
      adm_in_charge,
      gestor_sell,
      orders,
      dollar_price,
      cup_price,
      revenew_total,
      seller_cash,
      tienda,
      guest_name,
      guest_email,
      phone,
      payment_format,
      payment_option,
      status_sell
    } = req.body;

    console.log(req.body)

    const result = await pool.query(
      `
      INSERT INTO guest_orders (
        id,
        qrcode,
        adm_in_charge,
        gestor_sell,
        orders,
        dollar_price,
        cup_price,
        revenew_total,
        seller_cash,
        tienda,
        guest_name,
        guest_email,
        phone,
        payment_format,
        payment_option,
        status_sell
      )
      VALUES (
        $1,$2,$3,$4,
        $5,$6,$7,$8,
        $9,$10,$11,$12,
        $13,$14,$15,$16
      )
      RETURNING *
      `,
      [
        id,
        qrcode,
        adm_in_charge,
        gestor_sell,
        JSON.stringify(orders),
        dollar_price,
        cup_price,
        revenew_total,
        seller_cash,
        tienda,
        guest_name,
        guest_email,
        phone,
        payment_format,
        payment_option,
        status_sell
      ]
    );

    return res.status(201).json({
      success: true,
      order: result.rows[0]
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
   GET ALL ORDERS
========================================= */

export const getAllOrders = async (req, res) => {

    try {

      const result =
        await pool.query(
          `
          SELECT
            orders.*,

            customers.name
              AS customer_name,

            customers.email
              AS customer_email

          FROM orders

          JOIN customers
          ON orders.customer_id =
             customers.customer_id

          ORDER BY orders.date DESC
          `
        );



      return res.status(200).json(
        result.rows
      );

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          "Error fetching orders"
      });
    }
  };

/* =========================================
   GET ONE ORDER
========================================= */

export const getOrderById = async (req, res) => {

    try {

      const { id } = req.params;



      const result =
        await pool.query(
          `
          SELECT *

          FROM orders

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
            "Order not found"
        });
      }



      return res.status(200).json(
        result.rows[0]
      );

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          "Error fetching order"
      });
    }
  };


/* =========================================
   UPDATE ORDER
========================================= */

// export const updateOrder = async (req, res) => {

//     try {

//       const { id } = req.params;

//       const updatedData =
//         req.body;

//       const result =
//         await pool.query(
//           `
//           UPDATE orders

//           SET

//             payment_format =
//               $1,

//             payment_option =
//               $2,

//             status_sell =
//               $3,
            
//             adm_in_charge  =
//               $4,
            
//             gestor_sell  =
//               $5


//           WHERE id = $6

//           RETURNING *
//           `,
//           [


//             updatedData.orders[0].payment_format,

//             updatedData.orders[0].payment_option,

//             updatedData.orders[0].status_sell,

//             updatedData.orders[0].adm_in_charge,

//             updatedData.orders[0].gestor_sell,

//             id
//           ]
//         );



//       return res.status(200).json({

//         success: true,

//         message:
//           "Order updated successfully",

//         order: result.rows[0]
//       });

//     } catch (error) {

//       console.log(error);

//       return res.status(500).json({

//         success: false,

//         message:
//           "Error updating order"
//       });
//     }
//   };

export const updateOrder = async (req, res) => {

  try {

    const { id } = req.params;

    const {

      qrcode,
      adm_in_charge,
      gestor_sell,
      orders,
      dollar_price,
      cup_price,
      revenew_total,
      seller_cash,
      tienda,
      guest_name,
      guest_email,
      phone,
      payment_format,
      payment_option,
      status_sell

    } = req.body;

    const result = await pool.query(
      `
      UPDATE guest_orders

      SET

        qrcode = COALESCE($1, qrcode),

        adm_in_charge = COALESCE($2, adm_in_charge),

        gestor_sell = COALESCE($3, gestor_sell),

        orders = COALESCE($4, orders),

        dollar_price = COALESCE($5, dollar_price),

        cup_price = COALESCE($6, cup_price),

        revenew_total = COALESCE($7, revenew_total),

        seller_cash = COALESCE($8, seller_cash),

        tienda = COALESCE($9, tienda),

        guest_name = COALESCE($10, guest_name),

        guest_email = COALESCE($11, guest_email),

        phone = COALESCE($12, phone),

        payment_format = COALESCE($13, payment_format),

        payment_option = COALESCE($14, payment_option),

        status_sell = COALESCE($15, status_sell)

      WHERE id = $16

      RETURNING *
      `,
      [

        qrcode,

        adm_in_charge,

        gestor_sell,

        orders
          ? JSON.stringify(orders)
          : null,

        dollar_price,

        cup_price,

        revenew_total,

        seller_cash,

        tienda,

        guest_name,

        guest_email,

        phone,

        payment_format,

        payment_option,

        status_sell,

        id
      ]
    );

    if (result.rows.length === 0) {

      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    return res.status(200).json({

      success: true,

      message:
        "Order updated successfully",

      order: result.rows[0]

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,

      message:
        "Error updating order",

      error: error.message

    });
  }
};


/* =========================================
   DELETE ORDER
========================================= */

export const deleteOrder = async (req, res) => {

    try {

      const { id } = req.params;



      await pool.query(
        `
        DELETE FROM orders
        WHERE id = $1
        `,
        [id]
      );



      return res.status(200).json({

        success: true,

        message:
          "Order deleted successfully"
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          "Error deleting order"
      });
    }
  };