import express from "express";
import { createUser } from "../controllers/authentication/createUser";
import { getUsers } from "../controllers/authentication/getUser";
import { upDateUser } from "../controllers/authentication/putUser";
import { getUserById } from "../controllers/authentication/getUserById";

const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/", getUsers);

userRouter.get("/:userId", getUserById);

userRouter.put("/updateUser/:userId", upDateUser);

export default userRouter;
