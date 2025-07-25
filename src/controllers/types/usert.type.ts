import { Schema, Types } from "mongoose";
import { FoodOrderItemModelType } from "./food-order-type";

export enum UserRoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}
export type UserModelType = {
  /* Identity and Authentication Info */
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;

  /* Contact Information */
  address: string;

  /* Role and Permissions */
  role: UserRoleEnum;

  /* Order Information */
  orderedFoods: FoodOrderItemModelType[];

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};

export type UserType = {
  userId: Types.ObjectId;
  role: UserRoleEnum;
  email: string;
};
