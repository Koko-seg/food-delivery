import { Request, Response } from "express";
import Food from "../../models/food";

export const getFoods = async (req: Request, res: Response) => {
  try {
    const foods = await Food.find().populate("category");
    res.status(200).send({ success: true, foods });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
