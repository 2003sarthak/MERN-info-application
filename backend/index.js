import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import userRouters from './router/userRoutes.js'
import cors from 'cors';
import GetUsers from "./router/getuserRouter.js";

dotenv.config();
connectDB();
const app=express();
const PORT=process.env.POST||5000;
app.use(cors({
  origin: 'http://localhost:5173', // The URL of your frontend
  credentials: true,
}));

//middle wares
app.use(express.json());//to parse JSON data in the req.body
app.use(express.urlencoded({extended:true}));//to parse form data in req.body
//routes
app.use("/api/auth",userRouters)
app.use("/api/users",GetUsers)
app.listen(PORT,()=>console.log(`Server listen at local host http://localhost:${PORT} `));