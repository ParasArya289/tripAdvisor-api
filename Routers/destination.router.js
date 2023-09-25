const express = require("express");
const destinationRouter = express.Router();
const {createTravelDestinationController,getTravelDestinationByNameController,getAllTravelDestinationsController,readTravelDestinationsByLocationController,readTravelDestinationsByRatingController,updateTravelDestinationController,filterDestinationsByRatingController,deleteTravelDestinationController} = require("../Controllers/destination.controller.js");

destinationRouter.get("/",getAllTravelDestinationsController);
destinationRouter.get("/rating",readTravelDestinationsByRatingController);
destinationRouter.get("/:name",getTravelDestinationByNameController);
destinationRouter.get("/location/:location",readTravelDestinationsByLocationController);
destinationRouter.get("/filter/:rating",filterDestinationsByRatingController);


destinationRouter.post("/",createTravelDestinationController);
destinationRouter.post("/:destinationId",updateTravelDestinationController);

destinationRouter.delete("/:destinationId",deleteTravelDestinationController);

module.exports = destinationRouter;