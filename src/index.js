// entry point

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env",
});

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("MongoDB Connection ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server listening on port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

/* 
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Listening on port: ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR: ", error);
    }
})();
 */
