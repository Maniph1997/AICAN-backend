import express from "express";
import { create } from "../controllers/studentController.js";



const studentRoute = express.Router();


studentRoute.post("/create/teacher", create);
studentRoute.get("/getAll/teacher", getAll);
studentRoute.get("/getone/:id",getOne)
studentRoute.put("/update/:id",update);
studentRoute.delete("/delete/:id",deleteTeacher);




export default studentRoute;