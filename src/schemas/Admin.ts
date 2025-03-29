import { DateTime } from "luxon";
import { Model, Schema, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";

export type AdminDoc = MongooseDefaults & {
  userId: Types.ObjectId;
};
export type AdminModel = Model<AdminDoc>;

export const AdminSchema = {
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: String,
    default: DateTime.now().toISO(),
  },
};

export const AdminModelName = "Admin";
