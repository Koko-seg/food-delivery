import express from "express";


import { createOrder } from "../controllers/foodOrder/create-order";
import { getOrders } from "../controllers/foodOrder/get-order";
import { getOrderById } from "../controllers/foodOrder/getById-order";
import { upDateOrder } from "../controllers/foodOrder/update-order";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);

orderRouter.get("/:orderId", getOrderById);
orderRouter.get("/", getOrders);

orderRouter.put("/updateOrder/:orderId", upDateOrder);

export default orderRouter;
