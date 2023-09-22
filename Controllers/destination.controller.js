const {createTravelDestination,getTravelDestinationByName,getAllTravelDestinations,readTravelDestinationsByLocation} = require("../Queries/destination.queries.js");

const createTravelDestinationController = async(req,res)=>{
  const {body} = req;
  try{
    const destination = await createTravelDestination(body);
    res.status(201).json({message:"Destination Created",destination})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}
const getTravelDestinationByNameController = async(req,res)=>{
  const {name} = req.params;
  try{
    const destination = await getTravelDestinationByName(name);
    res.status(200).json({message:"Destination found",destination})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}
const getAllTravelDestinationsController = async(_,__)=>{
  try{
    const destinations = await getAllTravelDestinations();
    res.status(200).json({message:"Destinations found",destinations})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}
const readTravelDestinationsByLocationController = async(req,res)=>{
  const {location} = req.params;
  try{
    const destinations = await readTravelDestinationsByLocation(location);
    res.status(200).json({message:"Destinations found",destinations})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = {createTravelDestinationController,getTravelDestinationByNameController,getAllTravelDestinationsController,readTravelDestinationsByLocationController};