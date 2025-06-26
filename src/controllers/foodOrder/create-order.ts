import { Request, Response } from "express";
import FoodOrder from "../../models/foodOrder";

export const createOrder =async (req:Request, res:Response)=> {

  const {foodOrderItems, status}=req.body 
    
    try {
        const order = await new FoodOrder ({foodOrderItems,status}). save()
        res.status(200).send({ success: true, order });
    } catch (error) {
      res.status(400).send({ message: "api error", error });
    }
}