import React from "react";
import { useTasks } from "./TasksContext";

const CompletedTasks=()=>{
  
  const {completedTasks} = useTasks();
  return (
    <>
      <div
        className=" card "
        style={{ backgroundColor: "#FFC785", color: "white" }}
      >
        <div className="card-header" style={{ backgroundColor: "#FFC785" }}>
          Completed Tasks
        </div>
        <ul className="list-group list-group-flush">
          {completedTasks.length > 0 ? (
            completedTasks.map((task, index) => (
              <li key={index} className="list-group-item ">
                {task.taskTitle}
              </li>
            ))
          ) : (
            <li className="list-group-item">No Completed Tasks</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default CompletedTasks;
