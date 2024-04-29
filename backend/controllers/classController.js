
import Class from "../models/classModel.js";


export const create = async(req, res)=>{
    try {

        const classData = new Class(req.body);
        if(!classData){
            return res.status(404).json("Class data is not found")
        }

        const savedData = await classData.save();
        res.status(200).json(savedData);
        
    } catch (error) {
        res.status(500).json("error")
        
    }
}

export const getAll = async(req, res)=>{
    try {
        const classData = await Class.find()
        if(!classData){
            return res.status(404).json("Class data is not found")
        }

        res.status(200).json(classData);
        
    } catch (error) {
        console.log("error")
        
    }
}

export const getOne = async(req, res)=>{
    try {
        const id = req.parama.id;
        const classExist = await Class.findById(id);
        (!classExist){
            return res.status(404).json("Class data is not found")

        }
        res.status(200).json(classExist)
        
    } catch (error) {

        console.log("error")
    }
}

export const update = async(req, res)=>{
    try {
        const id = req.params.id;
        const classExist = await Class.findById(id);
        (!classExist){
            return res.status(404).json("Class data is not found")

        }
        const updatedClass = await Class.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedClass)
        
    } catch (error) {
        console.log("error")
        
    }
}

export const deleteClass = async(req, res)=>{
    try {
        const id = req.params.id;
        const classExist = await Class.findById(id);
        (!classExist){
            return res.status(404).json("Class data is not found")

        }
        await Class.findByIdAndDelete(id);
        res.status(200).json("Class details deleted successfully")
        
    } catch (error) {
        console.log("error")
        
    }
}


