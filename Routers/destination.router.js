const express = require("express");
const destinationRouter = express.Router();
const {createTravelDestinationController,getTravelDestinationByNameController,getAllTravelDestinationsController,readTravelDestinationsByLocationController,updateTravelDestinationController,readTravelDestinationsByRatingController,deleteTravelDestinationController} = require("../Controllers/destination.controller.js");

destinationRouter.get("/",getAllTravelDestinationsController);
destinationRouter.get("/:name",getTravelDestinationByNameController);
destinationRouter.get("/location/:location",readTravelDestinationsByLocationController);
destinationRouter.get("/rating/:rating",readTravelDestinationsByRatingController);


destinationRouter.post("/",createTravelDestinationController);
destinationRouter.post("/:destinationId",updateTravelDestinationController);

destinationRouter.delete("/:destinationId",deleteTravelDestinationController);

module.exports = destinationRouter;