import { Model } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";
export type AnnouncementDoc = MongooseDefaults & {
    title: string;
    message: string;
};
export type AnnouncementModel = Model<AnnouncementDoc>;
export declare const Announcement: AnnouncementModel;
