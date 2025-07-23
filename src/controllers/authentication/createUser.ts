import { Request, Response } from "express";

import { User } from "../../models/user";
import bcrypt from "bcrypt";

// type CreateOrderParams = {
//   foodOrderItems: FoodOrderItemType[];
//   user: string;
//   totalPrice: number;
// };

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await new User({
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      isVerified: false,
    }).save();
    res.status(200).send({ success: true, user });
    // res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
