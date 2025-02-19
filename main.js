import express from "express";

const app=express();
const PORT=5000;
app.get("/",(req,res)=>{
    res.json({msg:"Hello Everyone"});


})


//crud

//reading
app.get("/movies",()=>{

})

//creating
app.post("/movies",()=>{
    
})

//update
app.put("/movies/:id",()=>{
    
})

//delete
app.delete("/movies/:id",()=>{
    
})


app.listen(PORT,()=>{
console.log(`Server listening on the port on http://localhost:${PORT}`)
    
})