import express from "express";
import cors from "cors";
import pool from "./config/db";

const app = express();
const port = process.env.PORT || 3001;

console.log(typeof process.env.DB_PORT)

// Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.get("/", async (req, res) => {
//   const result = await pool.query("SELECT current_database()");
//   res.send(`Hello world: ${result.rows[0].current_database}`);
// });

// // Error handling middleware

// // Server running
// app.listen(port, () => {
//   console.log(`Server is running at port ${port}`);
// });
