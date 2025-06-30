import { Request, Response } from "express";
import { FoodCategory } from "../../models/foodCategory";

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const categories = await FoodCategory.find();
    res.status(200).send({ success: true, categories });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
