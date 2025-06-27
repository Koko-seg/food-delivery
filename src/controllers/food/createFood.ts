import { Request, Response } from "express";

import { Food } from "../../models/food";


export const createFood = async (req: Request, res: Response) => {
  const { foodName, category, price, image, ingredients } = req.body;
  try {
    const food = await new Food({
      foodName,
      category,
      price,
      image,
      ingredients,
    }).save();

    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
