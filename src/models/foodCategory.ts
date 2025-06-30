import { model, Schema } from "mongoose";

const foodCategorySchema = new Schema({
  categoryName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const FoodCategory = model("FoodCategory", foodCategorySchema);
