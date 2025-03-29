import { DateTime } from "luxon";
import { Schema } from "mongoose";
export const AdminSchema = {
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    createdAt: {
        type: String,
        default: DateTime.now().toISO(),
    },
};
export const AdminModelName = "Admin";
