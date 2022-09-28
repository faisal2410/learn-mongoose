const express=require('express')
const router=express.Router()
const {createTour}=require("../controllers/tourDemo.js")


router.post("/newTour",createTour)



module.exports=router