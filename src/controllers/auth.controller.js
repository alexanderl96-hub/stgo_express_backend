import { users } from "../../data/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET = "mysecretkey"; // later move to .env

// REGISTER
export const register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  // check existing user
  const exist = users.find(u => u.email === email);
  if (exist) {
    return res.status(400).json({ message: "User already exists" });
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now(),
    name,
    email,
    phone,
    password: hashedPassword,
    order: [],
    orderProccess: [],
    delivered: []
  };

  users.push(newUser);

  // create token
  const token = jwt.sign(
    { id: newUser.id, email: newUser.email },
    SECRET,
    { expiresIn: "7d" }
  );

  res.status(201).json({
    token,
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    }
  });
};


// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }



//   const valid = await bcrypt.compare(password, user.password);
  const valid = password === user.password;
  if (!valid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    token,
    // user: {
    //   id: user.id,
    //   name: user.name,
    //   email: user.email
    // }
     user: user
  });
};