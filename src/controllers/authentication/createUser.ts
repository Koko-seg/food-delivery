import { Request, Response } from "express";

import { User } from "../../models/user";

// type CreateOrderParams = {
//   foodOrderItems: FoodOrderItemType[];
//   user: string;
//   totalPrice: number;
// };

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address } = req.body;

  try {
    console.log(email, password, phoneNumber, address);

    const user = await new User({
      email,
      password,
      phoneNumber,
      address,
    }).save();
    res.status(200).send({ success: true, user });
    // res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
