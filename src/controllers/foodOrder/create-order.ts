import { Request, Response } from "express";
import { FoodOrder } from "../../models/foodOrder";
import { FoodOrderItemType } from "../../models/foodOrderItem";

type CreateOrderParams = {
  foodOrderItems: FoodOrderItemType[];
};

export const createOrder = async (req: Request, res: Response) => {
  const { foodOrderItems } = req.body as CreateOrderParams;

  try {
    console.log(foodOrderItems);

    const order = await new FoodOrder({foodOrderItems}).save();

    console.log("ORDER ITEMS", order);
    
    res.status(200).send({ success: true, order});
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
