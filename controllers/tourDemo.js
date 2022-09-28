const {createTourService}=require("../services/tourDemo")
exports.createTour=async(req,res)=>{
    try{
        const result = await createTourService();
        console.log(result)    
        res.status(200).json({
          status: "success",
          messgae: "Data inserted successfully!",
          data: result,
        })
    }catch(error){
        res.status(400).json({
            status: "fail",
            message: " Data is not inserted ",
            error: error.message,
          })
    }
}