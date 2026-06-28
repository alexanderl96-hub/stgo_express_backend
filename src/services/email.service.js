import pool from "../config/db.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendOrderEmail = async (order) => {
  try {

    // ============================================
    // Find customer or guest by order id
    // ============================================

    let customer = null;


    let result = await pool.query(
            `
            SELECT
                name,
                email,
                o->>'id' AS order_id
            FROM customers
            CROSS JOIN LATERAL jsonb_array_elements("order") AS o
            WHERE (o->>'id')::bigint = $1;
            `,
            [order.id]
            );


    if (result.rows.length) {
      customer = result.rows[0];
    } else {
      result = await pool.query(
        `
        SELECT name, email
        FROM guest
        WHERE EXISTS (
          SELECT 1
          FROM jsonb_array_elements("order") o
          WHERE (o->>'id')::bigint = $1
        )
        `,
        [order.id]
      );

      if (result.rows.length) {
        customer = result.rows[0];
      }
    }

    if (!customer) {
      console.warn(`⚠️ Customer not found for order ${order.id}`);

      customer = {
        name: "Cliente no encontrado",
        email: "-"
      };
    }

    // ============================================
    // Products
    // ============================================

    const products = order.orders
      .map(
        (item) => `
          <tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${item.colors || "-"}</td>
            <td>${item.sizes || "-"}</td>
            <td>$${item.price}</td>
          </tr>
        `
      )
      .join("");

    // ============================================
    // Send Email
    // ============================================

    const info = await transporter.sendMail({
      from: process.env.EMAIL,

      to: process.env.NOTIFICATION_EMAILS,

      subject: `🛒 Nuevo Pedido #${order.id}`,

      html: `
        <h2>🛒 Nuevo Pedido</h2>

        <p><b>Cliente:</b> ${customer.name}</p>
        <p><b>Correo:</b> ${customer.email}</p>
        <p><b>Teléfono:</b> ${order.phone}</p>

        <hr>

        <p><b>Administrador:</b> ${order.adm_in_charge}</p>

        <p><b>Forma de Pago:</b> ${order.payment_format}</p>

        <p><b>Método:</b> ${order.payment_option}</p>

        <table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Color</th>
              <th>Talla</th>
              <th>Precio</th>
            </tr>
          </thead>

          <tbody>
            ${products}
          </tbody>
        </table>

        <hr>

        <p><b>Total:</b> $${order.revenew_total}</p>

        <p><b>Pago al Vendedor:</b> $${order.seller_cash}</p>

        <p><b>Ganancia Tienda:</b> $${order.tienda}</p>

        <p>
          <a href="${order.qrcode}">
            Ver Pedido
          </a>
        </p>
      `,
    });

    console.log("✅ Email sent:", info.messageId);

    return info;
  } catch (err) {
    console.error("❌ EMAIL ERROR:");
    console.error(err);
    throw err;
  }
};