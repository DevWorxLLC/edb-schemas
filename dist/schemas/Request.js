import { DateTime } from "luxon";
import { Schema } from "mongoose";
export const RequestSchema = new Schema({
    responseTime: {
        type: Number,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    endpoint: {
        type: String,
        required: true,
    },
    query: {
        type: String,
        required: true,
    },
    params: {
        type: String,
        required: true,
    },
    requestHeaders: {
        type: String,
        required: true,
    },
    responseBody: {
        type: String,
        required: true,
    },
    responseStatus: {
        type: Number,
        required: true,
    },
    responseHeaders: {
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
export const RequestModelName = "Request";
