import express from 'express';
import dotenv from 'dotenv';
dotenv.config();  

import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './database/db.js';
import assistantRouter from "./routes/assistantRoute.js";
import { geminiResponse } from './config/Gemini.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true  
}));

// app.get('/', async (req,res)=>{
//     const prompt = req.query.prompt;
//     console.log(prompt);
    
//     const data = await geminiResponse(prompt,"Ada","Shivam");
//     res.json(data)
// })
connectDB();

 
app.use("/api", assistantRouter);
 

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
