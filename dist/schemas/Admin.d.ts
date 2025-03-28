import { Model, Schema, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type AdminDoc = MongooseDefaults & {
    userId: Types.ObjectId;
};
export type AdminModel = Model<AdminDoc>;
export declare const AdminSchema: Schema<AdminDoc, AdminModel, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AdminDoc, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<AdminDoc>> & import("mongoose").FlatRecord<AdminDoc> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
