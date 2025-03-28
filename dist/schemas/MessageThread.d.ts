import { Model, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type MessageThreadDoc = MongooseDefaults & {
    userId: Types.ObjectId;
};
export type MessageThreadModel = Model<MessageThreadDoc>;
export declare const MessageThread: MessageThreadModel;
