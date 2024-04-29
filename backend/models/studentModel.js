import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    birthDay:{
        type: String,
        required: true
    },
    contactDetails:{
        type: Number,
        required: true
    },
    feesPaid:{
        type: Number,
        required: true
    },
    class:{
        type: String,
        required: true
    },
 
})
export default mongoose.model("Student", studentSchema)