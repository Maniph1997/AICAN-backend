import express from "express";
import { create, getAll, getOne, deleteTeacher } from "../controllers/classController.js";



const teacherRoute = express.Router();


teacherRoute.post("/create/teacher", create);
teacherRoute.get("/getAll/teacher", getAll);
teacherRoute.get("/getone/:id",getOne)
teacherRoute.put("/update/:id",update);
teacherRoute.delete("/delete/:id",deleteTeacher);




export default teacherRoute;
