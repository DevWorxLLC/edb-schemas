import { DateTime } from "luxon";
import { Model, Schema, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";

export type MessageDoc = MongooseDefaults & {
  body: string;
  userId: Types.ObjectId;
  read: boolean;
  isAdmin: boolean;
  messageThreadId: Types.ObjectId;
};
export type MessageModel = Model<MessageDoc>;

export const MessageSchema = new Schema<MessageDoc, MessageModel>(
  {
    body: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    messageThreadId: {
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

export const MessageModelName = "Message";
