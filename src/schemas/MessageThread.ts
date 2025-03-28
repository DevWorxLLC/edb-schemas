import { DateTime } from "luxon";
import { Model, model, models, Schema, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";

export type MessageThreadDoc = MongooseDefaults & {
  userId: Types.ObjectId;
};
export type MessageThreadModel = Model<MessageThreadDoc>;

const MessageThreadSchema = new Schema<MessageThreadDoc, MessageThreadModel>(
  {
    userId: {
      type: Schema.Types.ObjectId,
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

export const MessageThread: MessageThreadModel =
  models.MessageThread ||
  model<MessageThreadDoc, MessageThreadModel>(
    "MessageThread",
    MessageThreadSchema
  );
