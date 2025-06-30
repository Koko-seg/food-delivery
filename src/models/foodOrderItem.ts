import { model, Schema, models } from "mongoose";
import { FoodSchemaType } from "./food";

export type FoodOrderItemType = {
  quantity: number;
  food: FoodSchemaType;
  price: number;
};

export const foodOrderItemSchema = new Schema<FoodOrderItemType>(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { _id: false }
);
