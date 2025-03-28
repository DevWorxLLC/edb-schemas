import { DateTime } from "luxon";
import { Model, Schema, Types } from "mongoose";
import { MongooseDefaults } from "../types/mongooseDefaults";

export type ReadAnnouncementDoc = MongooseDefaults & {
  userId: Types.ObjectId;
  announcementId: Types.ObjectId;
};
export type ReadAnnouncementModel = Model<ReadAnnouncementDoc>;

export const ReadAnnouncementSchema = new Schema<
  ReadAnnouncementDoc,
  ReadAnnouncementModel
>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    announcementId: {
      type: Schema.Types.ObjectId,
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

export const ReadAnnouncementModelName = "ReadAnnouncement";
