import { model, Schema } from "mongoose";
import { FoodOrderStatus } from "../enum/FoodOrderStatusEnum";

const foodOrderSchema = new Schema({
  user: { type: String, required: true },
  totalPrice: { type: String, required: true },
 foodOrderItems: {   type: Schema.Types.ObjectId,
    // enum: Object.values(FoodOrderStatus),
    // enum:Object.values (PENDING, CANCELED,DELIVERED),
    ref: "FoodOrder",
    default: FoodOrderStatus.PENDING,
    required: true,
},
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const FoodOrder = model("FoodOrder", foodOrderSchema);
export default FoodOrder;
