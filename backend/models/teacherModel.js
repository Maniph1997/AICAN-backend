import mongoose from "mongoose";



const teacherSchema = new mongoose.Schema({
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
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    assignedClass:{
        type: String,
        required: true
    },
  
})

export default mongoose.model("Teacher", teacherSchema);

