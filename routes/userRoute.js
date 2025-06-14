import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  signin,
  updateUser,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUser);
userRouter.get("/signin", signin);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
