import express, { Request, Response } from "express";
import { connectDb } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
const app = express();
const port = 3800;
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("food");
});

app.use("/", foodCategoryRouter);
app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
