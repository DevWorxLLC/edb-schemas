import { Model, Schema } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type UserDoc = MongooseDefaults & {
    clerkId: string;
    active: boolean;
    role: "user" | "admin";
    stripeCustomerId: string;
    email: string;
    apiKey: string;
    apiKeyCreated: string | null;
};
export type UserModel = Model<UserDoc>;
export declare const UserSchema: Schema<UserDoc, UserModel, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserDoc, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserDoc>> & import("mongoose").FlatRecord<UserDoc> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const UserModelName = "User";
