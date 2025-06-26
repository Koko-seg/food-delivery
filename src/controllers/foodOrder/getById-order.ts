import { Request, Response } from "express";

import FoodOrder from "../../models/foodOrder";

export const getOrderById = async (req: Request, res: Response) => {
  const { orderId } = req.params;

  try {
    const order = await FoodOrder.findById(orderId);
    res.status(200).send({ success: true, order});
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
