import express from "express";
import cors from "cors";
import pool from "./config/db";

import userRoute from "./routes/user.route";
import errorHandling from "./middlewares/errorHandler";
import { createUserTable } from "./data/createUserTable";

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Create table before starting server
createUserTable();

// Routes
app.use("/api", userRoute);

// Error handling middleware for above routes
app.use(errorHandling);

// Testing POSTGRES connection
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`Hello world: ${result.rows[0].current_database}`);
});

// Error handling middleware

// Server running
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
