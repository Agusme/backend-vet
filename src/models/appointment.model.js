import mongoose,{Schema} from "mongoose";

const appointmentSchema = new Schema({
    appointmentDetail:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:200,
    },
    veterinarian:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:100,
    },
    pet:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:100,
    },
    date:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:100,
    },
    time:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:100,
        unique:true

    }
})

const Appointment = mongoose.model('appointment', appointmentSchema);
export default Appointment;
