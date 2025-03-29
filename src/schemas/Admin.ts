import { DateTime } from "luxon";
import { Model, Schema, SchemaDefinition, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";

export type AdminDoc = MongooseDefaults & {
  userId: Types.ObjectId;
};
export type AdminModel = Model<AdminDoc>;

export const AdminSchema: SchemaDefinition<AdminDoc> = {
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
