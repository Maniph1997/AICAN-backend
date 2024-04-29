
import Student from "../models/studentModel.js"


export const create = async(req, res)=>{
    try {

        const studentData = new YTeac(req.body);
        if(!studentData){
            return res.status(404).json("Class data is not found")
        }

        const savedData = await studentData.save();
        res.status(200).json(savedData);
        
    } catch (error) {
        res.status(500).json("error")
        
    }
}

export const getAll = async(req, res)=>{
    try {
        const studentData = await Student.find()
        if(!classData){
            return res.status(404).json("Class data is not found")
        }

        res.status(200).json(studentData);
        
    } catch (error) {
        console.log("error")
        
    }
}

export const getOne = async(req, res)=>{
    try {
        const id = req.parama.id;
        const studentExist = await Student.findById(id);
        (!studentExist){
            return res.status(404).json("Class data is not found")

        }
        res.status(200).json(studentExist)
        
    } catch (error) {

        console.log("error")
    }
}

export const update = async(req, res)=>{
    try {
        const id = req.params.id;
        const studentExist = await Student.findById(id);
        (!studentExist){
            return res.status(404).json("Class data is not found")

        }
        const updatedStudent = await Class.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedStudent)
        
    } catch (error) {
        console.log("error")
        
    }
}

export const deleteStudent = async(req, res)=>{
    try {
        const id = req.params.id;
        const studentExist = await Student.findById(id);
        (!studentExist){
            return res.status(404).json("Student data is not found")

        }
        await Student.findByIdAndDelete(id);
        res.status(200).json("Student details deleted successfully")
        
    } catch (error) {
        console.log("error")
        
    }
}


