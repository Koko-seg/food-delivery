import { Request, Response } from "express";

import Food from "../../models/food";

export const updateFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const { foodName } = req.body;

  try {
    const updateFood = await Food.findByIdAndUpdate(foodId, {
      foodName,
    });
    res.status(200).send({ success: true, updateFood });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
