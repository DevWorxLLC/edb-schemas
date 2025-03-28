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
export declare const MessageSchema: Schema<MessageDoc, MessageModel, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MessageDoc, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MessageDoc>> & import("mongoose").FlatRecord<MessageDoc> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const MessageModelName = "Message";
