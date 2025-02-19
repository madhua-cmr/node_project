import express from "express";

const app=express();
const PORT=5000;
app.get("/",(req,res)=>{
    res.json({msg:"Hello Everyone"});


})


app.listen(PORT,()=>{
console.log(`Server listening on the port on http://localhost:${PORT}`)
    
})