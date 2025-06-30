import { Request, Response } from "express";
import { FoodCategory } from "../../models/foodCategory";

export const updateFoodCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const { categoryName } = req.body;

  try {
    const updateCategories = await FoodCategory.findByIdAndUpdate(categoryId, {
      categoryName,
    });
    res.status(200).send({ success: true, updateCategories });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
