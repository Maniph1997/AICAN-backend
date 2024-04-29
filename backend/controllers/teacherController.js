import Teacher from "../models/teacherModel.js"



export const create = async (req, res)=>{
    try {
        const teacherData = new Teacher(req.body);
        if(!teacherData){
            return res.status(404).json("Teacher data is not found")
        }
        const savedData = await teacherData.save();

        res.status(200).json(savedData)
        
    } catch (error) {
        res.status(500).json("error")
        
    }
}

export const getAll = async(req,res)=>{
    try {
        const teacherData = await Teacher.find();
        if(!teacherData){
            return res.status(404).json("Teacher data is not found");
        }
        res.status(200).json(teacherData)
        
    } catch (error) {
        res.status(500).json("error")
        
    }
}

export const getOne = async(req, res)=>{
    try {
        const id = req.parama.id;
        const teacherExist = await Teacher.findById(id);
        (!teacherExist){
            return res.status(404).json("Teacher data is not found")

        }
        res.status(200).json(teacherExist)
        
    } catch (error) {

        console.log("error")
    }
}

export const update = async(req, res)=>{
    try {
        const id = req.params.id;
        const teacherExist = await Teacher.findById(id);
        (!teacherExist){
            return res.status(404).json("Class data is not found")

        }
        const updatedTeacher = await Class.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedTeacher)
        
    } catch (error) {
        console.log("error")
        
    }
}

export const deleteTeacher = async(req, res)=>{
    try {
        const id = req.params.id;
        const teacherExist = await Class.findById(id);
        (!teacherExist){
            return res.status(404).json("Class data is not found")

        }
        await Class.findByIdAndDelete(id);
        res.status(200).json("Class details deleted successfully")
        
    } catch (error) {
        console.log("error")
        
    }
}


