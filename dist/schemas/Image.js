import { DateTime } from "luxon";
import { model, models, Schema } from "mongoose";
const ImageSchema = new Schema({
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
export const Image = models.Image || model("Image", ImageSchema);
