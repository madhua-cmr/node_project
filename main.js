import express from "express";
import movieRoutes from "./routes/movies.route.js"
const app=express();
const PORT=5000;
app.get("/",(req,res)=>{
    res.json({msg:"Hello Everyone"});
})



//client -->  middleware -->server
app.use('/movies',movieRoutes);



app.listen(PORT,()=>{
console.log(`Server listening on the port on http://localhost:${PORT}`)
    
})