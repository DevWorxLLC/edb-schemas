import { DateTime } from "luxon";
import { Schema } from "mongoose";
export const ImageSchema = new Schema({
    exerciseId: {
        type: String,
        required: true,
        index: true,
    },
    nanoid: {
        type: String,
        required: true,
        index: true,
    },
    withWatermark: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: String,
        default: DateTime.now().toISO(),
    },
}, {
    timestamps: false,
});
export const ImageModelName = "Image";
