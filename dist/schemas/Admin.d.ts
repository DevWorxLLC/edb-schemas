import { Model, SchemaDefinition, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type AdminDoc = MongooseDefaults & {
    userId: Types.ObjectId;
};
export type AdminModel = Model<AdminDoc>;
export declare const AdminSchema: SchemaDefinition<AdminDoc>;
export declare const AdminModelName = "Admin";
