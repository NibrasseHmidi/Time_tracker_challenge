const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    name:String,
    description:String,
    time:Number
      
    
},{
    timestamps: true,
  })

module.exports = mongoose.model("Task", taskSchema);