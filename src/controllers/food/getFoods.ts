import { Request, Response } from "express";
import { Food } from "../../models/food";

export const getFoodWithCategories = async (req: Request, res: Response) => {
  try {
<<<<<<< HEAD
    const foodWithCategories = await Food.aggregate([
=======
    const foods = await Food.aggregate([
>>>>>>> 35575be5be313073d6851e448f3fd2019688dff9
      {
        $lookup: {
          from: "foodcategories",
          localField: "category",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },
<<<<<<< HEAD
      { $unwind: "$categoryDetails" },
      {
        $group: {
          _id: "$categoryDetails._id",
          categoryName: { $first: "$categoryDetails.categoryName" },
=======
      {
        $unwind: "$categoryDetails",
      },
      {
        $group: {
          _id: "$categoryDetails._id",
          categoryName: {
            $first: "$categoryDetails.categoryName",
          },
>>>>>>> 35575be5be313073d6851e448f3fd2019688dff9
          foods: {
            $push: {
              _id: "$_id",
              foodName: "$foodName",
              price: "$price",
              image: "$image",
              ingredients: "$ingredients",
            },
          },
<<<<<<< HEAD
          count: { $sum: 1 },
        },
      },
    ]);
    // const foods = await Food.find().populate("category");
    res.status(200).send({ success: true, foodWithCategories });
=======
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    res.status(200).send({ success: true, foods });
>>>>>>> 35575be5be313073d6851e448f3fd2019688dff9
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
