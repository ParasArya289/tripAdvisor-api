const express = require("express");
const destinationRouter = express.Router();
const {createTravelDestinationController,getTravelDestinationByNameController,getAllTravelDestinationsController,readTravelDestinationsByLocationController} = require("../Controllers/destination.controller.js");

destinationRouter.get("/",createTravelDestinationController);
destinationRouter.get("/:name",getTravelDestinationByNameController);
destinationRouter.get("/location/:location",readTravelDestinationsByLocationController);


destinationRouter.post("/",getAllTravelDestinationsController);

module.exports = destinationRouter;