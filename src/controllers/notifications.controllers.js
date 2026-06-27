import pool from "../config/db.js";

// Get all notifications
export const getNotifications = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM notifications
      ORDER BY created_at DESC
    `);

    res.json({
      success: true,
      notifications: result.rows,
    });
  } catch (err) {
    console.error("GET NOTIFICATIONS:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Create notification
export const createNotification = async (req, res) => {
  const {
    title,
    message,
    type = "order",
    customer_id,
    order_id,
  } = req.body;

  try {
    const result = await pool.query(
      `
      INSERT INTO notifications
      (
        title,
        message,
        type,
        customer_id,
        order_id
      )
      VALUES($1,$2,$3,$4,$5)
      RETURNING *
      `,
      [
        title,
        message,
        type,
        customer_id,
        order_id,
      ]
    );

    res.status(201).json({
      success: true,
      notification: result.rows[0],
    });
  } catch (err) {
    console.error("CREATE NOTIFICATION:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Mark as read
export const readNotification = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `
      UPDATE notifications
      SET is_read = true
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    if (!result.rows.length) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    res.json({
      success: true,
      notification: result.rows[0],
    });
  } catch (err) {
    console.error("READ NOTIFICATION:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete notification
export const deleteNotification = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query(
      `
      DELETE FROM notifications
      WHERE id = $1
      `,
      [id]
    );

    res.json({
      success: true,
      message: "Notification deleted",
    });
  } catch (err) {
    console.error("DELETE NOTIFICATION:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};