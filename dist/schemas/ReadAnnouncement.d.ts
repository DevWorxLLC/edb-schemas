import { Model, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type ReadAnnouncementDoc = MongooseDefaults & {
    userId: Types.ObjectId;
    announcementId: Types.ObjectId;
};
export type ReadAnnouncementModel = Model<ReadAnnouncementDoc>;
export declare const ReadAnnouncement: ReadAnnouncementModel;
