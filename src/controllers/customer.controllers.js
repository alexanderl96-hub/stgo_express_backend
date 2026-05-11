import { users } from "../../data/db.js";

import {
  createNewUser,
  getUserById,
  updateUser,
  deleteUser
} from "../utils/factories.js";



export const getCustomers = (req, res) => {
  res.json(users);
};


export const createCustomer = (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      password,
      birthday,
      imagen,
      address,
      role
    } = req.body;



    // REQUIRED FIELDS
    if (
      !name ||
      !email ||
      !phone ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Missing required fields"
      });
    }



    // CHECK IF USER EXISTS
    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() ===
        email.toLowerCase()
    );



    if (existingUser) {
      return res.status(409).json({
        success: false,
        message:
          "User already exists"
      });
    }



    // CREATE USER
    const newUser = createNewUser({
      name,
      email,
      phone,
      password,
      birthday,
      imagen,
      address,
      role
    });



    // SAVE USER
    users.push(newUser);



    return res.status(201).json({
      success: true,
      user: newUser
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        "Error creating customer"
    });
  }
};

export const getCustomerById = (
  req,
  res
) => {

  try {

    const { id } = req.params;



    const user = getUserById(
      users,
      Number(id)
    );



    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }



    return res.status(200).json(user);

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        "Error fetching customer"
    });
  }
};

export const updateCustomer = (
  req,
  res
) => {

  try {

    const { id } = req.params;



    const existingUser = getUserById(
      users,
      Number(id)
    );



    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }



    const updatedUsers = updateUser(
      users,
      Number(id),
      req.body
    );



    return res.status(200).json({
      success: true,
      users: updatedUsers
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        "Error updating customer"
    });
  }
};

export const deleteCustomer = (
  req,
  res
) => {

  try {

    const { id } = req.params;



    const existingUser = getUserById(
      users,
      Number(id)
    );



    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }



    const updatedUsers = deleteUser(
      users,
      Number(id)
    );



    return res.status(200).json({
      success: true,
      users: updatedUsers
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        "Error deleting customer"
    });
  }
};
