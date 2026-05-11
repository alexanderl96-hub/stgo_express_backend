import { administrador } from "../../data/db.js";
// import { createNewUser } from "../utils/factories.js";

export const getAdmins = (req, res) => {
  res.json(administrador);
};

// export const createAdmin = (req, res) => {
//   const { name, email, phone } = req.body;

//   const newUser = createNewUser({ name, email, phone });

//   users.push(newUser);

//   res.status(201).json(newUser);
// };