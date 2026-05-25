// server.js

import app from "./src/app.js";

import pool from "./src/config/db.js";



const PORT =
  process.env.PORT || 5001;




console.log(
  "DATABASE URL:",
  process.env.DATABASE_URL
);




pool.query("SELECT NOW()")
  .then((res) => {

    console.log(
      "DATABASE CONNECTED:",
      res.rows
    );
  })
  .catch((err) => {

    console.log(
      "DATABASE ERROR:",
      err
    );
  });




pool.query("SELECT current_database()")
  .then((res) => {

    console.log(
      "CONNECTED DB:",
      res.rows
    );
  })
  .catch((err) => {

    console.log(
      "DB ERROR:",
      err
    );
  });




app.listen(PORT, () => {

  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );
});