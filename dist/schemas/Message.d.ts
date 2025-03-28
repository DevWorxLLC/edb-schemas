import { Model, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type MessageDoc = MongooseDefaults & {
    body: string;
    userId: Types.ObjectId;
    read: boolean;
    isAdmin: boolean;
    messageThreadId: Types.ObjectId;
};
export type MessageModel = Model<MessageDoc>;
export declare const Message: MessageModel;
