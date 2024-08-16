import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        subscriber: {
            type: mongoose.SchemaType.Types.ObjectId,
            ref: "User",
        },
        channel: {
            type: mongoose.SchemaType.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

export const Subscription = mongoose.models("Subscription", subscriptionSchema);
