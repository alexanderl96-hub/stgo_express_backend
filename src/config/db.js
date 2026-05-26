import dotenv from "dotenv";

dotenv.config();

import pkg from "pg";

const { Pool } = pkg;




console.log(
  "DATABASE URL:",
  process.env.DATABASE_URL
);




const pool = new Pool({

  connectionString:
    process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: false
  }
});




pool.query(
  "SELECT current_database()"
)
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




export default pool;