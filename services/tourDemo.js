const Tour=require("../models/tourModelDemo")

exports.createTourService=async()=>{
   
    const testTour= await new Tour({
        name:"A tour to England",
        price:3000
    })
    testTour.save()
    return testTour;
}