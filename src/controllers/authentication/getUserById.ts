import { Request, Response } from "express";

import { FoodOrder } from "../../models/foodOrder";
import { User } from "../../models/user";

export const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    res.status(200).send({ success: true, user });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
