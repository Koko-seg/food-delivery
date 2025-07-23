import { Request, Response } from "express";

import { FoodOrder } from "../../models/foodOrder";

export const getOrderById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const order = await FoodOrder.find({ user: userId }).populate({
      path: "foodOrderItems",
      populate: {
        path: "food",
      },
    });
    res.status(200).send({ success: true, order });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
