import{
  SET_LOADING,
    AJOUT_TASK_SUCCESS,
    AJOUT_FAIL,
    GET_ALL_TASK_SUCCESS,
    DELETE_TASK_SUCCESS,
  
  
   
} from "../constante/taskconst"

import axios from "axios";

//add tasks
export const addtask =({name,description,time})=>
  async (dispatch) => {
  
 
    try {
    
      let  {data}  = await axios.post("/task/add",{name,description,time});
      console.log(data) 
      dispatch({
        type:AJOUT_TASK_SUCCESS,
        payload: data,
      })
      dispatch(
        getalltask()
      )
    } catch (error) {
      dispatch({
        type: AJOUT_FAIL,
      });
    }
  };

//get all tasks
  export const getalltask = () => async(dispatch) =>{
  dispatch({type:SET_LOADING})
      try {
          
          const {data} = await axios.get("/task/allTask")
       console.log(data)
         
     dispatch({
         type: GET_ALL_TASK_SUCCESS,
         payload: data
     })
     
      } catch (error) {
        console.log(error)
  }
  }
 
//delete tasks


export const deleteTask = (id) => async (dispatch) => {
  try {
    
    const {data} = await axios.delete(`/task/${id}`)
    console.log(data)
    dispatch({ 
      type:  DELETE_TASK_SUCCESS,
      payload:data})

      dispatch(
        getalltask()
      )
     
    
  } catch (error) {
  console.dir(error)
  }}

  