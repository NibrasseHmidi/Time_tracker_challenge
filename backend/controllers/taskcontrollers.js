const taskmodel = require('../models/Task')


//addTask

const ajoutTask = async (req, res) => {
    const {name,description,time} = req.body
    const newTask = new taskmodel({name,description,time})
    try {
        
        await newTask.save()
        res.status(200).send({ task: newTask })
      
    } catch (error) {
      console.log(error)
        res.status(400).send({msg:"cant post tasks"})
   
   }}
   
   //get all task

const GetAllTask= async (req,res)=> {
    const allTask = await taskmodel.find();
           res.status(200).json(allTask)
    
    }


  
     //delete tasks

     const DeleteTask = async (req,res)=> {
   
      const deleteTask = await taskmodel.findById(req.params.id);
      console.log(deleteTask)
        if (deleteTask) {
          await deleteTask.remove();
         
        } else {
          res.status(404);
          throw new Error("Note not Found");
        }
  
      
      }
    module.exports = {GetAllTask,ajoutTask,DeleteTask}

   