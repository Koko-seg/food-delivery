import express from "express";
import { createUser } from "../controllers/authentication/createUser";
import { getUsers } from "../controllers/authentication/getUser";
import { upDateUser } from "../controllers/authentication/putUser";

const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/", getUsers);

userRouter.put("/updateUser/:userId", upDateUser);

export default userRouter;
