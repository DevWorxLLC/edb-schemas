import { DateTime } from "luxon";
import { model, models, Schema } from "mongoose";
const MessageThreadSchema = new Schema({
    userId: {
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
export const MessageThread = models.MessageThread ||
    model("MessageThread", MessageThreadSchema);
