import { model, Schema } from "mongoose";

enum UserEnum {
  USER = "User",
  ADMIN = "Admin",
}
const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, minlength: 6, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      type: String,
      required: true,
      default: UserEnum.USER,
      enum: Object.values(UserEnum),
    },
    isVerified: { type: Boolean, require: true },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
