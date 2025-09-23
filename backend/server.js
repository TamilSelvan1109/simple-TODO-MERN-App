import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import todoRoutes from './routes/todo.route.js'

dotenv.config({quite:true});

const app = express();
app.use(express.json());  // uses to read the json fromat data
app.use("/api/todos", todoRoutes);


app.listen(3000,()=>{
    connectDB();
    console.log("Server is started at http://localhost:3000");  
});

app.get("/",(req,res)=>{
    res.send("updated Responsed from server!");
})