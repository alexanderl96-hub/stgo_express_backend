import pool from "../config/db.js";

import {
  createNewOrder
} from "../utils/factories.js";



/* =========================================
   CREATE ORDER
========================================= */

export const createOrder = async (
  req,
  res
) => {

  try {

    const {

      email,

      orders,

      paymentFormat,

      paymentOption,

      admInCharge,

      gestorSell,

      sellerCash,

      dollarPrice,

      cupPrice,

      revenewTotal,

      tienda,

      qrcode,

      statusSell,

      phone

    } = req.body;



    // FIND USER
    const userResult =
      await pool.query(
        `
        SELECT *
        FROM customers
        WHERE email = $1
        `,
        [email]
      );



    if (
      userResult.rows.length === 0
    ) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }



    const user =
      userResult.rows[0];



    // CREATE ORDER OBJECT
    const newOrder =
      createNewOrder({

        orders,

        paymentFormat,

        paymentOption,

        admInCharge,

        gestorSell,

        sellerCash,

        dollarPrice,

        cupPrice,

        revenewTotal,

        tienda,

        qrcode,

        statusSell,

        phone
      });



    // INSERT ORDER
    const result =
      await pool.query(
        `
        INSERT INTO orders (

          id,

          customer_id,

          qrcode,

          adm_in_charge,

          gestor_sell,

          orders,

          dollar_price,

          cup_price,

          revenew_total,

          seller_cash,

          tienda,

          phone,

          date,

          payment_format,

          payment_option,

          status_sell

        )
        VALUES (

          $1, $2, $3, $4,
          $5, $6, $7, $8,
          $9, $10, $11, $12,
          $13, $14, $15, $16

        )
        RETURNING *
        `,
        [

          newOrder.id,

          user.customer_id,

          newOrder.qrcode,

          newOrder.admInCharge,

          newOrder.gestorSell,

          JSON.stringify(
            newOrder.orders
          ),

          newOrder.dollarPrice,

          newOrder.cupPrice,

          newOrder.revenewTotal,

          newOrder.sellerCash,

          newOrder.tienda,

          newOrder.phone,

          newOrder.date,

          newOrder.paymentFormat,

          newOrder.paymentOption,

          newOrder.statusSell
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

export const getAllOrders =
  async (req, res) => {

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

export const getOrderById =
  async (req, res) => {

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

export const updateOrder =
  async (req, res) => {

    try {

      const { id } = req.params;

      const updatedData =
        req.body;



      const result =
        await pool.query(
          `
          UPDATE orders

          SET

            payment_format =
              $1,

            payment_option =
              $2,

            status_sell =
              $3

          WHERE id = $4

          RETURNING *
          `,
          [

            updatedData.paymentFormat,

            updatedData.paymentOption,

            updatedData.statusSell,

            id
          ]
        );



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
          "Error updating order"
      });
    }
  };



/* =========================================
   DELETE ORDER
========================================= */

export const deleteOrder =
  async (req, res) => {

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