import { Request, Response } from "express";

import { User } from "../../models/user";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).send({ success: true, users });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
