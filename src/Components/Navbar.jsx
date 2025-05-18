import { useTasks } from "./TasksContext";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const {tasks, setTasks,setCompletedTasks}= useTasks();
  const {originalTasks} = useTasks();
  const [val, setVal] = useState("");
  const handleChange = (e) => { 
    setVal(e.target.value);
  };    


  function handleSearch(e) {
    e.preventDefault();
    
    const filteredTasks = tasks.filter((task) => {
      return originalTasks.taskTitle.toLowerCase().includes(val.toLowerCase());
    });
    
    console.log(filteredTasks);
    setTasks(filteredTasks);
  }
  return (
    <nav className="navbar" style={{ backgroundColor: "#FFC785" }}>
      <div className="container-fluid">
        <Link onClick={()=>{setTasks(originalTasks),setCompletedTasks([])}} className="navbar-brand fw-bold text-light">TaskNest</Link>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Enter Task Title"
            aria-label="Search"
            value={val}
            onChange={handleChange}
            
          />
          <button className="btn btn-outline-light" onClick={handleSearch}>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;