import express from "express";

import { createFood } from "../controllers/food/createFood";
import { getFood } from "../controllers/food/getFood";
import { DeleteFood } from "../controllers/food/deleteFood";
import { updateFood } from "../controllers/food/updateFood";
import { getFoodWithCategories } from "../controllers/food/getFoods";

const foodRouter = express.Router();

foodRouter.post("/", createFood);

foodRouter.get("/:foodId", getFood);
<<<<<<< HEAD
foodRouter.get("/getFoodWithCategories", getFoodWithCategories);
=======
foodRouter.get("/", getFoodWithCategories);
>>>>>>> 35575be5be313073d6851e448f3fd2019688dff9

// foodRouter.get("/foodWithCategories", getFoodWithCategories);
foodRouter.delete("/deleteFood/:foodId", DeleteFood);

foodRouter.put("/updateFood/:foodId", updateFood);

export default foodRouter;
//
