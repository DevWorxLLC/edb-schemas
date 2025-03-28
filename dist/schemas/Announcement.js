import { DateTime } from "luxon";
import { model, models, Schema } from "mongoose";
const AnnouncementSchema = new Schema({
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
export const Announcement = models.Announcement ||
    model("Announcement", AnnouncementSchema);
