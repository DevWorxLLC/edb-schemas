import { DateTime } from "luxon";
import { Model, model, models, Schema } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";

export type UserDoc = MongooseDefaults & {
  clerkId: string;
  active: boolean;
  role: "user" | "admin";
  stripeCustomerId: string;
  email: string;
  apiKey: string;
  apiKeyCreated: string | null;
};
export type UserModel = Model<UserDoc>;

const UserSchema = new Schema<UserDoc, UserModel>(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    stripeCustomerId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    apiKey: {
      type: String,
      index: true,
      default: "",
    },
    apiKeyCreated: {
      type: String,
      default: null,
    },
    createdAt: {
      type: String,
      default: DateTime.now().toISO(),
    },
  },
  {
    timestamps: false,
  }
);

export const User: UserModel =
  models.User || model<UserDoc, UserModel>("User", UserSchema);
