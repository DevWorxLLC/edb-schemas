import { DateTime } from "luxon";
import { Model, model, models, Schema, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
import { User } from "./User";

export type RequestDoc = MongooseDefaults & {
  responseTime: number;
  userId: Types.ObjectId;
  endpoint: string;
  query: string;
  params: string;
  requestHeaders: string;
  responseBody: string;
  responseStatus: number;
  responseHeaders: string;
};
export type RequestModel = Model<RequestDoc>;

const RequestSchema = new Schema<RequestDoc, RequestModel>(
  {
    responseTime: {
      type: Number,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: User,
    },
    endpoint: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    params: {
      type: String,
      required: true,
    },
    requestHeaders: {
      type: String,
      required: true,
    },
    responseBody: {
      type: String,
      required: true,
    },
    responseStatus: {
      type: Number,
      required: true,
    },
    responseHeaders: {
      type: String,
      required: true,
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

export const Request: RequestModel =
  models.Request || model<RequestDoc, RequestModel>("Request", RequestSchema);
