import express from "express";
import { createFoodCategory } from "../controllers/foodCategory/create-food-category";
import { getFoodCategory } from "../controllers/foodCategory/get-food-category";
import { deleteFoodCategory } from "../controllers/foodCategory/delete-food-category";
import { updateFoodCategory } from "../controllers/foodCategory/put-food-category";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createFoodCategory);

foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.delete("/deleteCategory/:categoryId", deleteFoodCategory);

foodCategoryRouter.put("/putCategory/:categoryId", updateFoodCategory);

export default foodCategoryRouter;
