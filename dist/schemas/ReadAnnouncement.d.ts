import { Model, Schema, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type ReadAnnouncementDoc = MongooseDefaults & {
    userId: Types.ObjectId;
    announcementId: Types.ObjectId;
};
export type ReadAnnouncementModel = Model<ReadAnnouncementDoc>;
export declare const ReadAnnouncementSchema: Schema<ReadAnnouncementDoc, ReadAnnouncementModel, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ReadAnnouncementDoc, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ReadAnnouncementDoc>> & import("mongoose").FlatRecord<ReadAnnouncementDoc> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const ReadAnnouncementModelName = "ReadAnnouncement";
