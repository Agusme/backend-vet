import mongoose from "mongoose";
import 'dotenv/config'

const URI= process.env.MONGODB_URI
mongoose.connect(URI)

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("Data base connected!")
})