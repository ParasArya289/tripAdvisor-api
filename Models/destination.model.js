const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
name:String,
country: String,
city:String,
description:String,
rating:Number,
reviews:[{
  text:String,
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
}]
})

const Destination = mongoose.model("Destination",destinationSchema);

module.exports = Destination;