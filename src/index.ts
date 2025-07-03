import express, { Request, Response } from "express";
import cors from "cors";

import { connectDb } from "./database/database";
import cors from "cors";

import foodCategoryRouter from "./router/foodCategory.router";
import foodRouter from "./router/food.router";
import orderRouter from "./router/foodOrder.router";
import userRouter from "./router/user.router";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/category", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);

app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
