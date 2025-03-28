import { DateTime } from "luxon";
import { Model, model, models, Schema } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";

export type AnnouncementDoc = MongooseDefaults & {
  title: string;
  message: string;
};
export type AnnouncementModel = Model<AnnouncementDoc>;

const AnnouncementSchema = new Schema<AnnouncementDoc>(
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

export const Announcement: AnnouncementModel =
  models.Announcement ||
  model<AnnouncementDoc, AnnouncementModel>("Announcement", AnnouncementSchema);
