import mongoose,{Schema} from "mongoose";

const appointmentSchema = new Schema({
    appointmentDetail:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:30,
    },
    veterinarian:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:30,
    },
    pet:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:30,
    },
    date:{
        require: true,
        type: Date,
    },
    time:{
        require: true,
        type:String,
        min: 8,
        max:16,

    }
})

const Appointment = mongoose.model('appointment', appointmentSchema);
export default Appointment;
