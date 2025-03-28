import { Model, Types } from "mongoose";
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
export declare const Request: RequestModel;
