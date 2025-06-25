import express from "express";
import { createFoodCategory } from "../controller/create-food-category";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/createCategory", createFoodCategory);

export default foodCategoryRouter;
