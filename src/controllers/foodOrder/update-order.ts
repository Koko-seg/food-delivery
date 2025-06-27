import { Request, Response } from "express";
import  {FoodOrder} from "../../models/foodOrder";

export const upDateOrder = async (req:Request, res:Response)=> {
    const {orderId}= req.params

    try {
        const updateOrders =await FoodOrder.findByIdAndUpdate(orderId)


      res.status(200).send({ success: true, updateOrders});
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
}