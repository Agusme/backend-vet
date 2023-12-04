import { text } from "express";
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
        type: String,
    },
    time: {
        require: true,
        type: String,
        validate: {
          validator: (value) => /^(?:1[0-6]|0?[8-9]):[0-5][0-9]$/.test(value),
          message: 'La hora debe estar en formato de 24 horas (por ejemplo, "14:30").',
        },
      },
    });
    

const Appointment = mongoose.model('appointment', appointmentSchema);
export default Appointment;
