import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import { useTasks } from "./TasksContext";
function Offside() {

  const { originalTasks,setTasks } = useTasks();
  const handleselect = (date) => {
    const selectedDate = date.toLocaleDateString();
    const filteredTasks = originalTasks.filter((task) => {
      const taskDate = new Date(task.dueDate).toLocaleDateString();
      return taskDate === selectedDate;
    });
    setTasks(filteredTasks);
    
    
  }
  
  return (
    <>
      <div
        className="align-items-center d-flex justify-content-center  border border-radius-5 mt-2 ml-2"
        style={{
          
          backgroundColor: "#FFC785",
        }}
      >
        <Calendar onChange={handleselect} />
      </div>
    </>
  );
}
export default Offside;
