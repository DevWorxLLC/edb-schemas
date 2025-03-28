import { Model, Schema, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
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
export declare const RequestSchema: Schema<RequestDoc, RequestModel, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RequestDoc, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<RequestDoc>> & import("mongoose").FlatRecord<RequestDoc> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const RequestModelName = "Request";
