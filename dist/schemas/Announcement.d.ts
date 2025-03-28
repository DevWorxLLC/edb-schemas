import { Model, Schema } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type AnnouncementDoc = MongooseDefaults & {
    title: string;
    message: string;
};
export type AnnouncementModel = Model<AnnouncementDoc>;
export declare const AnnouncementSchema: Schema<AnnouncementDoc, Model<AnnouncementDoc, any, any, any, import("mongoose").Document<unknown, any, AnnouncementDoc> & MongooseDefaults & {
    title: string;
    message: string;
} & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AnnouncementDoc, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<AnnouncementDoc>> & import("mongoose").FlatRecord<AnnouncementDoc> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const AnnouncementModelName = "Announcement";
