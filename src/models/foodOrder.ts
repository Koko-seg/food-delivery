import { model, Schema } from "mongoose";
import { foodOrderItemSchema } from "./foodOrderItem";

enum Numib {
  PENDING = "Pending",
  CANCELED = "Canceled",
  DELIVERED = "Delivered",
}

const foodOrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalPrice: { type: Number, required: true },
    foodOrderItems: [{ type: foodOrderItemSchema, required: true }],
    status: {
      type: String,
      required: true,
      default: Numib.PENDING,
      enum: Object.values(Numib),
    },
  },
  { timestamps: true }
);

export const FoodOrder = model("FoodOrder", foodOrderSchema);
