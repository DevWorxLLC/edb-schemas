import { DateTime } from "luxon";
import { model, models, Schema } from "mongoose";
const ReadAnnouncementSchema = new Schema({
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
export const ReadAnnouncement = models.ReadAnnouncement ||
    model("ReadAnnouncement", ReadAnnouncementSchema);
