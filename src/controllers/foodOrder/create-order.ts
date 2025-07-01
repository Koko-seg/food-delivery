import { Request, Response } from "express";
import { FoodOrder } from "../../models/foodOrder";
import { FoodOrderItemType } from "../../models/foodOrderItem";

type CreateOrderParams = {
  foodOrderItems: FoodOrderItemType[];
  user: string;
  // totalPrice: number;
};

export const createOrder = async (req: Request, res: Response) => {
  const { user, foodOrderItems } = req.body as CreateOrderParams;

  try {
    console.log(foodOrderItems);

    const order = await new FoodOrder({
      user,

      foodOrderItems,
    }).save();
    res.status(200).send({ success: true, order });
    // res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
