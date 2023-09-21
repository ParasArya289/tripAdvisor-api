const express = require("express");
require("./mongoDB")

const app = express();

app.use(express.json());

app.get("/",(_,res)=>{
  res.send("tripAdvisor API")
})

//Global error handler
app.use((_,__,___,____)=>{
  res.status(500).json({error:"Something Went Wrong!"})
})

//Global route middleware
app.use((_,res)=>{
  res.status(404).json({error:"Requested API endpoint does not exist"})
})

app.listen(3000,()=>{
  console.log("Server started")
})