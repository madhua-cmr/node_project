import express from "express"

const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Get all movie list")
})

//creating
router.post("/",(req,res)=>{
    res.send("create movie")
})

//update
router.put("/:id",(req,res)=>()=>{
    res.send("update movie")
})

//delete
router.delete("/:id",(req,res)=>{
    res.send("delete movie")
})

export default router;
