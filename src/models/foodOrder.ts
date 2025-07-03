import { model, Schema } from "mongoose";
import { foodOrderItemSchema } from "./foodOrderItem";

enum OrderEnum {
  PENDING = "Pending",
  CANCELED = "Canceled",
  DELIVERED = "Delivered",
}

const foodOrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalPrice: { type: Number, require: true },
    foodOrderItems: [{ type: foodOrderItemSchema, required: true }],
    status: {
      type: String,
      required: true,
      default: OrderEnum.PENDING,
      enum: Object.values(OrderEnum),
    },
  },
  { timestamps: true }
);

foodOrderSchema.pre("save", function (next) {});

export const FoodOrder = model("FoodOrder", foodOrderSchema);
