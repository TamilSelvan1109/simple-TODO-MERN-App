import dotenv from 'dotenv';
import express from 'express';
import path from "path";
import { connectDB } from './config/db.js';
import todoRoutes from './routes/todo.route.js';

dotenv.config({quite:true});

const app = express();
app.use(express.json());  // uses to read the json fromat data
app.use("/api/todos", todoRoutes);

const __dirname = path.resolve();

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })
}

app.listen(3000,()=>{
    connectDB();
    console.log("Server is started at http://localhost:3000");  
});