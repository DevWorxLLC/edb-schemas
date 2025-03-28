import { DateTime } from "luxon";
import { Schema } from "mongoose";
export const AnnouncementSchema = new Schema({
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
}, {
    timestamps: false,
});
export const AnnouncementModelName = "Announcement";
