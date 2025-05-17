import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useTasks } from "./TasksContext";

function Addtask() {
  const { tasks,setTasks } = useTasks();
  const [task, setTask] = useState({
    id: "",
    taskTitle: "",
    category: "",
    description: "",
    dueDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }
  const navigate = useNavigate();

  const handleSave = () => {

    const newTask = { 
      ...task,
      id: Date.now().toString(),
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);

    navigate("/");
  };

  return (
    <>
      <div className="container justify-content-center align-items-center mt-5 col-lg-8 col-md-6 col-sm-8">
        <div
          className=" card  p-3"
          style={{ backgroundColor: "#FFC785", color: "white" }}
        >
          <h3 className="text-center">Add Task</h3>

          <form>
            <div className="mb-3">
              <label htmlFor="taskTitle" className="form-label fw-bold">
                Title
              </label>
              <input
                style={{}}
                id="taskTitle"
                name="taskTitle"
                className="form-control"
                placeholder="Enter task title"
                value={task.taskTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label fw-bold">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="form-select"
                value={task.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Health">Health</option>
                <option value="Home">Home</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label fw-bold">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                placeholder="Enter task description"
                value={task.description}
                onChange={handleChange}
                rows="3"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="dueDate" className="form-label fw-bold">
                Due Date
              </label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                className="form-control"
                value={task.dueDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#FF8A8A", color: "white" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#ACD793", color: "white" }}
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Addtask;
