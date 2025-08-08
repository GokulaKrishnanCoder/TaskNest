import  { use, useEffect, useState } from "react";

import Task from "./Task";
import { useTasks } from "./TasksContext";
import "../App.css";

function Cards() {
  const {tasks, setTasks,originalTasks,setCompletedTasks} = useTasks();


  const deleteTask = (id) => { 
    const newTasks = tasks.filter((task) => task.id !== id);

    setCompletedTasks((prevTasks) => {
      const completedTask = originalTasks.find((task) => task.id === id);
      if (completedTask) {
        return [...prevTasks, completedTask];
      }
      return prevTasks;
    });
    setTasks(newTasks);
  };

  const tasklist =
    tasks.length > 0 ? (
      tasks.map((task, i) => {
        return (
          <Task
            key={i + 1}
            id={task.id}
            title={task.taskTitle}
            due={task.dueDate}
            desc={task.description}
            category={task.category}
            onDeleteTask={deleteTask}
          />
        );
      })
    ) : (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h4>OOPS! No Tasks Found 😔</h4>
      </div>
    );

  return <>{tasklist}</>;
}

export default Cards;
