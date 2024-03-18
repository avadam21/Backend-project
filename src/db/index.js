import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async () => {
    try{
        const initiateConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongo DB connected at host: ${initiateConnection.connection.host}`)
    } catch(err) {
        console.log("Error is: ", err)
        process.exit(1)
    }
}

export default dbConnect