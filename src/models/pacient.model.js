import mongoose,{Schema} from "mongoose";

const pacientSchema = new Schema({
    ownerName:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:100,
    },
    email:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:200,
        unique:true
    },
    tel:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:100,
        unique:true
    },
    petName:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:100
    },
    specie:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:100
    },
    race:{
        require: true,
        type:String,
        minlenght: 2,
        maxlenght:100
    }
})

const Pacient = mongoose.model('pacient', pacientSchema);
export default Pacient;
