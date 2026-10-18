const mongoose = require("mongoose")
function checkValidObjectId(req,res,next){
    if(!mongoose.Types.ObjectId.isValid(req.params.productId)){
        return res.status(400).json({
        message: "Id not valid",
      })
    }else{
        next()
    }
}

module.exports = checkValidObjectId
