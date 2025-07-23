import express from "express";

import { createOrder } from "../controllers/foodOrder/create-order";

import { getOrderById } from "../controllers/foodOrder/getById-order";
import { upDateOrder } from "../controllers/foodOrder/update-order";
import { getOrders } from "../controllers/foodOrder/get-order";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);

orderRouter.get("/:userId", getOrderById);
orderRouter.get("/", getOrders);

orderRouter.put("/:orderId", upDateOrder);

export default orderRouter;
