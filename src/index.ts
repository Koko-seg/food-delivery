import express, { Request, Response } from "express";
import { connectDb } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import foodRouter from "./router/food.router";
const app = express();
const port = 3800;
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("food");
});

app.use("/category", foodCategoryRouter);

app.use("/food", foodRouter);
app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
