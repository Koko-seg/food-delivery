import { model, Schema } from "mongoose";

export type FoodSchemaType = {
  foodName:string;
  category: Schema.Types.ObjectId,
  price: string,
  image:string;
  ingredients:string
}

const FoodSchema = new Schema<FoodSchemaType>(
  {
    foodName: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
    price: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
  },
  { timestamps: true }
);

const Food = model<FoodSchemaType>("Food", FoodSchema);
export default Food;
