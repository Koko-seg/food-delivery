import { Request, Response } from "express";

import { User } from "../../models/user";
import { verify } from "../../utils/verify";

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ message: "Authorization token is required." });
      return;
    }

    const token = authHeader?.split(" ")[1] || "";

    const isVerified = verify(token);

    const user = await User.findOne({ _id: isVerified.data.userId });
    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
