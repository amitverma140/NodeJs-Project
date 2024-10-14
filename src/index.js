import { app } from "./app.js";
import connectDB from "./db/dbconnection.js";
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !! ", err);

    })


/*
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error: ", error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`Application is listing on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: ", error)
        throw error
    }
})()
*/