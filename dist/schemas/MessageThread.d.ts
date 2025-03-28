import { Model, Schema, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type MessageThreadDoc = MongooseDefaults & {
    userId: Types.ObjectId;
};
export type MessageThreadModel = Model<MessageThreadDoc>;
export declare const MessageThreadSchema: Schema<MessageThreadDoc, MessageThreadModel, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MessageThreadDoc, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MessageThreadDoc>> & import("mongoose").FlatRecord<MessageThreadDoc> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const MessageThreadModelName = "MessageThread";
