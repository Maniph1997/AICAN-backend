import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import classRoute from "./routes/classRoute.js"
import teacherRoute from "./routes/teacherRoute.js"
import studentRoute from "./routes/studentRoute.js"
// import routes from "./routes/teacherRoute.js"


const app = express()

app.use(bodyParser.json())
app.use(cors())
dotenv.config()


const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URL;

mongoose.connect(URL).then(()=>{

    console.log("DB is connected successfully")
}).catch(()=>{
    console.log("error")
})

app.listen(PORT,()=>{
    console.log(`Server is runnung at port ${PORT}` );
})

app.use("/api", classRoute)

app.use("/api",teacherRoute)
app.use("/api", studentRoute)
