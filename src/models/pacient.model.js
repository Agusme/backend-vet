import mongoose,{Schema} from "mongoose";

const pacientSchema = new Schema({
    ownerName:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:30,
    },
    email:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:30,
        unique:true
    },
    tel:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:12,
        unique:true
    },
    petName:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:30
    },
    specie:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:30
    },
    race:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:30
    }
})

const Pacient = mongoose.model('pacient', pacientSchema);
export default Pacient;
