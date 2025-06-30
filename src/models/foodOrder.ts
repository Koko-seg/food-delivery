import { model, Schema } from "mongoose";
import { foodOrderItemSchema } from "./foodOrderItem";

enum OrderEnum {
  PENDING = "Pending",
  CANCELED = "Canceled",
  DELIVERED = "Delivered",
}

const foodOrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", require: true },
    totalPrice: { type: Number, require: true },
    foodOrderItems: [{ type: foodOrderItemSchema, required: true }],
    status: {
      type: String,
      require: true,
      default: OrderEnum.PENDING,
      enum: Object.values(OrderEnum),
    },
  },
  { timestamps: true }
);

export const FoodOrder = model("FoodOrder", foodOrderSchema);
