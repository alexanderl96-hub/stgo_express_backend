// // import pkg from "pg";
// // import dotenv from "dotenv";

// // dotenv.config();

// // const { Pool } = pkg;

// // const pool = new Pool({
// //   host: process.env.DB_HOST,
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASSWORD,
// //   database: process.env.DB_NAME,
// //   port: process.env.DB_PORT,

// //   ssl: {
// //     rejectUnauthorized: false
// //   }
// // });

// // export default pool;

// import pkg from "pg";

// const { Pool } = pkg;

// const isProduction =
//   process.env.NODE_ENV === "production";



// console.log(
//   "DATABASE URL:",
//   process.env.DATABASE_URL
// );




// const pool = new Pool({

//   connectionString:
//     process.env.DATABASE_URL,

//   ssl: isProduction
//     ? {
//         rejectUnauthorized: false
//       }
//     : false
// });




// pool.query("SELECT current_database()")
//   .then((res) => {

//     console.log(
//       "CONNECTED DB:",
//       res.rows
//     );
//   })
//   .catch((err) => {

//     console.log(
//       "DB ERROR:",
//       err
//     );
//   });




// export default pool;
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