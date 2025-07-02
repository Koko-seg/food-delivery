import express from "express";

import { createFood } from "../controllers/food/createFood";
import { getFood } from "../controllers/food/getFood";
import { DeleteFood } from "../controllers/food/deleteFood";
import { updateFood } from "../controllers/food/updateFood";
import { getFoodWithCategories } from "../controllers/food/getFoods";

const foodRouter = express.Router();

foodRouter.post("/", createFood);

foodRouter.get("/:foodId", getFood);
foodRouter.get("/", getFoodWithCategories);

foodRouter.delete("/deleteFood/:foodId", DeleteFood);

foodRouter.put("/updateFood/:foodId", updateFood);

export default foodRouter;
