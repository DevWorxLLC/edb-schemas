import { Model, Schema, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type AdminDoc = MongooseDefaults & {
    userId: Types.ObjectId;
};
export type AdminModel = Model<AdminDoc>;
export declare const AdminSchema: {
    userId: {
        type: typeof Schema.Types.ObjectId;
        required: boolean;
    };
    createdAt: {
        type: StringConstructor;
        default: string;
    };
};
export declare const AdminModelName = "Admin";
