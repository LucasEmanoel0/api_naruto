import express from "express";
import routers from "./routers/index.ts";

const app  = express()
app.use(express.json())
app.use(routers)

app.use((err:any,req:express.Request,res:express.Response,next:express.NextFunction)=>{
    res.status(500).json({message:err.message})
})
app.listen(3333, () => {
    console.log("Server is running on port 3333")
})