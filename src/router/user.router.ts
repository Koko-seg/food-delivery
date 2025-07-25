import express from "express";
import { createUser } from "../controllers/authentication/createUser";
import { getUsers } from "../controllers/authentication/getUser";

import { getUserById } from "../controllers/authentication/getUserById";
import { signIn } from "../controllers/authentication/login";
import { getCurrentUser } from "../controllers/authentication/get-current-user";

const userRouter = express.Router();

userRouter.post("/sign-up", createUser);

userRouter.post("/login", signIn);

userRouter.get("/", getUsers);

userRouter.get("/getUserById/:userId", getUserById);

userRouter.get("/get-current-user", getCurrentUser);

export default userRouter;

//cloudinary
//nodemailer
//
