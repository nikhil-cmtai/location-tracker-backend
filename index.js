import express from 'express';

const app =express()

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Wellcome to the Backend"
    })
})

app.listen(9000,()=>{
    console.log("Backend Is Running ");
    
})