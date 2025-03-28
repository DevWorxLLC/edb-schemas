import { Model } from "mongoose";
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
export declare const User: UserModel;
