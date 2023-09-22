require("../mongoDB");
const Destination = require("../Models/destination.model.js");
const User = require("../Models/user.model.js");

const createTravelDestination = async(destinationData)=>{
  try{
    const newDestination = await new Destination(destinationData);
    const savedDestination = await newDestination.save();
    return savedDestination;
  }catch(error){
    throw error
  }
}

const getTravelDestinationByName = async(name)=>{
  try{
    const savedDestination = await Destination.findOne({name});
    if(!savedDestination){
      throw new Error("No destination found by name " + name);
    }
    return savedDestination;
  }catch(error){
    throw error
  }
}
const getAllTravelDestinations = async()=>{
  try{
    const savedDestinations = await Destination.find();
    if(!savedDestinations.length){
      throw new Error("No destinations exist");
    }
    return savedDestinations;
  }catch(error){
    throw error
  }
}
const readTravelDestinationsByLocation = async(cityOrCountry)=>{
  try{
    const savedDestinations = await Destination.find({$or:[              {country:cityOrCountry},{city:cityOrCountry}
    ]});
    if(!savedDestinations.length){
      throw new Error("No destinations exist");
    }
    return savedDestinations;
  }catch(error){
    throw error
  }
}

module.exports = {createTravelDestination,getTravelDestinationByName,getAllTravelDestinations,readTravelDestinationsByLocation};