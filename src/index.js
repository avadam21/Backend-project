// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import dbConnect from "./db/index.js";

dotenv.config({
    path: './env'
})
dbConnect()


/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("Error: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening at Port: ${process.env.PORT}`)
        })
    } catch(err){
        console.log("Error: ", err)
        throw err
    }
})()
*/