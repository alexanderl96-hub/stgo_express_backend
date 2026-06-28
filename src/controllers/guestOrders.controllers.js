import pool from "../config/db.js";
import { sendOrderEmail } from "../services/email.service.js";


export const createGuestOrder = async (req, res) => {
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

     console.log("check order", result)
        // Send email
        await sendOrderEmail({
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
          status_sell,
        });

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

export const getGuestOrders = async (req, res) => {
  try {

    const result = await pool.query(`
      SELECT *
      FROM guest_orders
      ORDER BY date DESC
    `);

    return res.json({
      success: true,
      orders: result.rows
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const getGuestOrder = async (req, res) => {
  try {

    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT *
      FROM guest_orders
      WHERE id = $1
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    return res.json({
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

export const updateGuestOrder = async (req, res) => {
  try {

    const { id } = req.params;

    const {
      status_sell
    } = req.body;

    const result = await pool.query(
      `
      UPDATE guest_orders
      SET status_sell = $1
      WHERE id = $2
      RETURNING *
      `,
      [
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

    return res.json({
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

export const deleteGuestOrder = async (req, res) => {
  try {

    const { id } = req.params;

    const result = await pool.query(
      `
      DELETE FROM guest_orders
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    return res.json({
      success: true,
      deleted: result.rows[0]
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};