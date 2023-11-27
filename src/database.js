import mongoose from "mongoose";
import 'dotenv/config'
//const url ='mongodb://127.0.0.1:27017/veterinaria'
//mongoose.connect(url);

const URI= process.env.MONGODB_URI
mongoose.connect(URI)

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("Data base connected!")
})