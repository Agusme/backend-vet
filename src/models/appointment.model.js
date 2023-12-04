import { Schema } from "mongoose";

const appointmentSchema = new Schema({
    
    appointmentDetail: {
        required: true,
        type: String,
        minlength: 2,
        maxlength: 30,
    },
    veterinarian: {
        required: true,
        type: String,
        minlength: 2,
        maxlength: 30,
    },
    pet: {
        required: true,
        type: String,
        minlength: 2,
        maxlength: 30,
    },
    date: {
        required: true,
        type: String,
    },
    time: {
        required: true,
        type: String,
        validate: {
            validator: (value) => /^(?:1[0-6]|0?[8-9]):[0-5][0-9]$/.test(value),
            message: 'La hora debe estar en formato de 24 horas (por ejemplo, "14:30").',
        },
    },
});

const Appointment = mongoose.model('appointment', appointmentSchema);
export default Appointment;
