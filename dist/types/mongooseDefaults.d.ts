import { Types } from "mongoose";
export type MongooseDefaults = {
    _id: Types.ObjectId;
    createdAt: string;
    updatedAt: string;
};
