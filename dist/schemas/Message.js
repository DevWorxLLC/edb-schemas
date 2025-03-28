import { DateTime } from "luxon";
import { Schema } from "mongoose";
export const MessageSchema = new Schema({
    body: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    read: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    messageThreadId: {
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
export const MessageModelName = "Message";
