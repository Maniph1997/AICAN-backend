import express from "express";
import { create, deleteClass, getAll, getOne, update } from "../controllers/classController.js";


const classRoute = express.Router();

classRoute.post("/create/class", create);
classRoute.get("/getAll/class", getAll);
classRoute.get("/getone/:id",getOne);
classRoute.put("/update/:id",update);
classRoute.delete("/delete/:id",deleteClass);


export default classRoute;
