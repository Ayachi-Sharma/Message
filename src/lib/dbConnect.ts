import mongoose from "mongoose";
import moongose from "mongoose"

type ConnectionObject = {
    isConnected?: number
}

const connection : ConnectionObject = {}

async function dbConnect ():Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to db");
        return
    }
    try {
        // console.log(process.env.DB_URI)
        const db = await mongoose.connect(process.env.DB_URI || '')
        // console.log(db);
        
        connection.isConnected = db.connections[0].readyState
        console.log("db connected");
        
    } catch (error) {
        console.log("db connection failed", error);
        
        throw error;
    }
}

export default dbConnect