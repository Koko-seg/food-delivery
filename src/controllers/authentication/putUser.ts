import { Request, Response } from "express";

import { User } from "../../models/user";

export const upDateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const updateUsers = await User.findByIdAndUpdate(userId);

    res.status(200).send({ success: true, updateUsers });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
