import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema(
    {
        videos: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
            },
        ],
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tweet: {
            type: Schema.Types.ObjectId,
            ref: "Tweet",
        },
    },
    { timestamps: true }
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
