import mongoose from "mongoose";


const classSchema = new mongoose.Schema({
    className:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    teacher:{
        type: String,
        required: true
    },
    studentFees:{
        type: Number,
        required: true
    },
    studentList:{
        type: String,
        required: true
    },
 
})
export default mongoose.model("Class", classSchema)

