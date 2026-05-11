import { orders, users } from "../../data/db.js";
import { createNewOrder } from "../utils/factories.js";

// export const createOrder = (req, res) => {
//   const { email, orders, paymentFormat, paymentOption } = req.body;

//   const user = users.find(u => u.email === email);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   const newOrder = createNewOrder({
//     orders,
//     paymentFormat,
//     paymentOption
//   });

//   user.order.push(newOrder);

//   res.status(201).json(newOrder);
// };

export const getOrders = (req, res) => {
  const allOrders = orders.flatMap(user =>
     user
  );

  res.json(allOrders);
};

// export const getAllOrders = (req, res) => {
//   const allOrders = orders.flatMap(user =>
//     (user.order || []).map(order => ({
//       ...order,
//       userName: user.name
//     }))
//   );

//   res.json(allOrders);
// };

// export const updateOrder = (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;

//   let updatedOrder = null;

//   users.forEach(customer => {
//     customer.order = customer.order.map(order => {
//       if (order.id == id) {
//         updatedOrder = { ...order, status };
//         return updatedOrder;
//       }
//       return order;
//     });
//   });

//   if (!updatedOrder) {
//     return res.status(404).json({ message: "Order not found" });
//   }

//   res.json({
//     message: "Order updated",
//     order: updatedOrder
//   });
// };


// import { users } from "../../data/db.js";

// import {
//   createNewOrder
// } from "../utils/factories.js";



/* =========================================
   CREATE ORDER
========================================= */

export const createOrder = (req, res) => {

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
      statusSell
    } = req.body;



    // FIND USER
    const user = users.find(
      (u) =>
        u.email.toLowerCase() ===
        email.toLowerCase()
    );



    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }



    // CREATE ORDER
    const newOrder = createNewOrder({

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

      statusSell
    });



    // PUSH ORDER
    user.order.push(newOrder);



    return res.status(201).json({
      success: true,
      order: newOrder
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        "Error creating order"
    });
  }
};



/* =========================================
   GET ALL ORDERS
========================================= */

export const getAllOrders = (
  req,
  res
) => {

  try {

    const allOrders = users.flatMap(
      (user) =>

        (user.order || []).map(
          (order) => ({

            ...order,

            customerId:
              user.customerId,

            customerName:
              user.name,

            customerEmail:
              user.email
          })
        )
    );



    return res.status(200).json(
      allOrders
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

export const getOrderById = (
  req,
  res
) => {

  try {

    const { id } = req.params;

    let foundOrder = null;



    users.forEach((user) => {

      const order = user.order.find(
        (o) =>
          Number(o.id) === Number(id)
      );



      if (order) {

        foundOrder = {

          ...order,

          customerId:
            user.customerId,

          customerName:
            user.name,

          customerEmail:
            user.email
        };
      }
    });



    if (!foundOrder) {
      return res.status(404).json({
        success: false,
        message:
          "Order not found"
      });
    }



    return res.status(200).json(
      foundOrder
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

export const updateOrder = (
  req,
  res
) => {

  try {

    const { id } = req.params;

    const updatedData = req.body;

    let updatedOrder = null;



    users.forEach((user) => {

      user.order = user.order.map(
        (order) => {

          if (
            Number(order.id) ===
            Number(id)
          ) {

            updatedOrder = {

              ...order,

              ...updatedData
            };

            return updatedOrder;
          }

          return order;
        }
      );
    });



    if (!updatedOrder) {

      return res.status(404).json({
        success: false,
        message:
          "Order not found"
      });
    }



    return res.status(200).json({

      success: true,

      message:
        "Order updated successfully",

      order: updatedOrder
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

export const deleteOrder = (
  req,
  res
) => {

  try {

    const { id } = req.params;

    let orderDeleted = false;



    users.forEach((user) => {

      const originalLength =
        user.order.length;



      user.order = user.order.filter(
        (order) =>
          Number(order.id) !==
          Number(id)
      );



      if (
        originalLength !==
        user.order.length
      ) {
        orderDeleted = true;
      }
    });



    if (!orderDeleted) {

      return res.status(404).json({
        success: false,
        message:
          "Order not found"
      });
    }



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
