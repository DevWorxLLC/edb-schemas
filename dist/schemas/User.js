import { DateTime } from "luxon";
import { model, models, Schema } from "mongoose";
const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    stripeCustomerId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    apiKey: {
        type: String,
        index: true,
        default: "",
    },
    apiKeyCreated: {
        type: String,
        default: null,
    },
    createdAt: {
        type: String,
        default: DateTime.now().toISO(),
    },
}, {
    timestamps: false,
});
export const User = models.User || model("User", UserSchema);
