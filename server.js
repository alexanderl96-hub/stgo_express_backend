// server.js
import app from "./src/app.js";
// import pool from "./src/config/db.js";

const PORT = 5001;

// app.get("/db-test", async (req, res) => {
//   try {
//     const data = await pool.query("SELECT NOW()");
//     res.json({
//       message: "PostgreSQL Connected",
//       time: data.rows,
//     });
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({
//       error: error.message,
//     });
//   }
// });

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});