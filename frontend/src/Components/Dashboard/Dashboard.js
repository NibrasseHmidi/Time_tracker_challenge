import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StopIcon from "@mui/icons-material/Stop";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./Dashboard.scss";
import { useEffect } from "react";

import {
  addtask,
  deleteTask,
  getalltask,
} from "../../redux/actions/taskActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApexChart from "../ApexChart/ApexChart";

toast.configure();

const Dashboard = () => {
  const dispatch = useDispatch();
  const prettyMilliseconds = require('pretty-ms')
  //get all tasks
  const allTask = useSelector((state) => state.taskReducer.task);
  useEffect(() => {
    dispatch(getalltask());
  }, []);
  //state useState
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
 
 
  //submit data
  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(addtask({ name, description,time }));
    setName("");
    setDescription("");
    toast.success("Great!! new Task is added! 🙂");
   

  };

  //delete task
  const handleDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete this task? "))
      dispatch(deleteTask(id));
    toast.error("Task Removed 🙂");
  };

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  //get calendar
  function getCalendar(date) {
    return moment().calendar();
  }
  var result = getCalendar(moment);


  return (
    <div className="wrapper-cards">
       
      <div className="card_Welcome card--bg">
     
        <FullCalendar 
        plugins={[daygridPlugin,interactionPlugin]}
        
        initialView="dayGridMonth"
        weekends={false}
        />
        
        
       
      </div>

      <div className="card">
        <div className="card__header">
          <h2>{result}</h2>
          
        </div>
        <h1>Time Tracker</h1>
      <div className="chart"><ApexChart/></div>
       
        {/*****************************  form add task *************************/}
        <form className="card__add" onSubmit={handleSubmit}>
          <input
            className="add__task"
            type="text"
            value={name}
            placeholder="add Name task"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="add__task"
            type="text"
            value={description}
            placeholder="add Description task"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
            <div className="time__task">
                     
            
                      <h1>
                        {("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:
                      </h1>
                      <h1>
                        {("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:
                      </h1>
                      <h1>
                        {("0" + (Math.floor(time / 10) % 100)).slice(-2)}
                      </h1>
                   
                     </div>
                       {/********************* button (start,stop,restart)*****************/}
                  {/* button stop */}
                  {timerOn && (
                    <button
                      onClick={() => setTimerOn(false)}
                      className="card__btn__stop"
                    >
                      <StopIcon style={{ marginBottom: "-7" }} />
                    </button>
                  )}
                  {/* button restart */}
                  {!timerOn && (
                    <button
                      onClick={() => {
                        setTime(0);
                      }}
                      className="card__btn__restart"
                    >
                      <RestartAltIcon style={{ marginBottom: "-7" }} />
                    </button>
                  )}
                  {/* button start */}
                  {!timerOn && time === 0 &&  (
                    <button
                      onClick={() => {
                        setTimerOn(true);
                      }}
                      className="card__btn__start"
                    >
                      <AlarmIcon style={{ marginBottom: "-7" }} />
                    </button>
                  )}
         
          <button type="submit" className="add__icon">
            {" "}
            <AddIcon />
          </button>
        </form>
        {/****************************** task list *****************************/}
        {allTask && allTask.length > 0
          ? allTask.map((el, index) => (
              <div className="card__tag" key={index}>
                <div className="task">
                  <h1>{el.name}</h1>
                  <span>{el.description}</span>
                </div>
                <div className="task__right">
                  <div className="time">
                  <div className="time__hours">
                    <h1> {prettyMilliseconds(el.time, { colonNotation: true })} </h1>
                  
                   
                  </div>
                    <span>{moment(el.createdAt).format("h:mm:ss a")}</span>
                  </div>
                  <div>
        
        </div>
                  {/* button delete task */}
                  <button
                    className="delete_btn"
                    onClick={() => handleDelete(el._id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))
          : null}

       
      </div>
    </div>
  );
};

export default Dashboard;
