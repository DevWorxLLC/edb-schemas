import { DateTime } from "luxon";
import { Schema } from "mongoose";
export const ReadAnnouncementSchema = new Schema({
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
}, {
    timestamps: false,
});
export const ReadAnnouncementModelName = "ReadAnnouncement";
