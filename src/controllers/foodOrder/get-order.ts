import { Request, Response } from "express";
import Food from "../../models/food";
import FoodOrder from "../../models/foodOrder";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await FoodOrder.find()
    res.status(200).send({ success: true, orders });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
