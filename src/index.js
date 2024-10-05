// require('dotenv').config({ path: './env' })
import dotenv from "dotenv"
import connectDB from "./db/dbconnection.js";
connectDB()
dotenv.config({
    path: './env'
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