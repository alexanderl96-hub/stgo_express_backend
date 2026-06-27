import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// export const sendOrderEmail = async (order) => {
//   const products = order.orders
//     .map(
//       (item) => `
//       <tr>
//         <td>${item.name}</td>
//         <td>${item.qty}</td>
//         <td>${item.colors || "-"}</td>
//         <td>${item.sizes || "-"}</td>
//         <td>$${item.price}</td>
//       </tr>
//     `
//     )
//     .join("");

//   await transporter.sendMail({
//     from: process.env.EMAIL,

//     // All recipients
//     to: process.env.NOTIFICATION_EMAILS,

//     subject: `🛒 Nuevo Pedido #${order.id}`,

//     html: `
//       <h2>Nuevo Pedido</h2>

//       <p><b>Cliente:</b> ${order.guest_name}</p>
//       <p><b>Correo:</b> ${order.guest_email}</p>
//       <p><b>Teléfono:</b> ${order.phone}</p>

//       <hr>

//       <p><b>Administrador:</b> ${order.adm_in_charge}</p>
//       <p><b>Forma de Pago:</b> ${order.payment_format}</p>
//       <p><b>Método:</b> ${order.payment_option}</p>

//       <table border="1" cellspacing="0" cellpadding="6">
//         <thead>
//           <tr>
//             <th>Producto</th>
//             <th>Cant.</th>
//             <th>Color</th>
//             <th>Talla</th>
//             <th>Precio</th>
//           </tr>
//         </thead>

//         <tbody>
//           ${products}
//         </tbody>
//       </table>

//       <hr>

//       <p><b>Total:</b> $${order.revenew_total}</p>
//       <p><b>Pago Vendedor:</b> $${order.seller_cash}</p>
//       <p><b>Ganancia Tienda:</b> $${order.tienda}</p>

//       <p>
//         <a href="${order.qrcode}">
//           Ver Pedido
//         </a>
//       </p>
//     `,
//   });
// };

export const sendOrderEmail = async (order) => {
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

  const info = await transporter.sendMail({
    from: process.env.EMAIL,

    to: process.env.NOTIFICATION_EMAILS,

    subject: `🛒 Nuevo Pedido #${order.id}`,

    html: `
      <h2>Nuevo Pedido</h2>

      <p><b>Cliente:</b> ${order.guest_name}</p>
      <p><b>Correo:</b> ${order.guest_email}</p>
      <p><b>Teléfono:</b> ${order.phone}</p>

      <hr>

      <p><b>Administrador:</b> ${order.adm_in_charge}</p>

      <p><b>Forma de Pago:</b> ${order.payment_format}</p>
      <p><b>Método:</b> ${order.payment_option}</p>

      <table border="1" cellspacing="0" cellpadding="6">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cant.</th>
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
      <p><b>Pago Vendedor:</b> $${order.seller_cash}</p>
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
};