const express = require("express");
const taskrouter = express.Router();
const controllers= require("../controllers/taskcontrollers")

//add Route
taskrouter.post("/add",  controllers.ajoutTask);

//get Route
taskrouter.get("/allTask",controllers.GetAllTask);

//delete Route
taskrouter.delete("/:id",controllers.DeleteTask)
module.exports = taskrouter;

