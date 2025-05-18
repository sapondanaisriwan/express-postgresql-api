import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post("/user", createUser);
userRouter.get("/user", getAllUser);
userRouter.get("/user/:id", getUserById);
userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;
