import { DateTime } from "luxon";
import { Model, Schema } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";

export type AnnouncementDoc = MongooseDefaults & {
  title: string;
  message: string;
};
export type AnnouncementModel = Model<AnnouncementDoc>;

export const AnnouncementSchema = new Schema<AnnouncementDoc>(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      default: DateTime.now().toISO(),
    },
  },
  {
    timestamps: false,
  }
);

export const AnnouncementModelName = "Announcement";
