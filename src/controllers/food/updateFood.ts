import { Request, Response } from "express";
import { Food } from "../../models/food";

export const updateFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const { image } = req.body;

  try {
    const updateFood = await Food.findByIdAndUpdate(foodId, {
      image,
    });
    res.status(200).send({ success: true, updateFood });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
