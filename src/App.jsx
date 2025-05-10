import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import Cards from "./Components/Cards.jsx";
import Addcards from "./Components/Addcards.jsx";
import Editcards from "./Components/Editcards.jsx";
import Calendarcard from "./Components/Calendarcard.jsx";
import Completedcards from "./Components/Completedcards.jsx";
import {db} from "./firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);
  const [originalTasks, setOriginalTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  
  useEffect(() => {
  

  const fetchTasks = async () => {
    try {
      const tasksRef = collection(db, "Tasks");
      const querySnapshot = await getDocs(tasksRef);

     const tasksArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
        ...doc.data(),
          dueDate: doc.data().dueDate?.toDate(), // Convert Timestamp to readable date
    }));
      setTasks(tasksArray);
      setOriginalTasks(tasksArray);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  fetchTasks();
}, []);
  const addTask = (newTask, ind) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    
  };

  const deleteTask = (id) => {
    console.log(id);
    const newTasks = tasks.filter((task) => task.id !== id);

    setCompletedTasks((prevTasks) => {
      const completedTask = tasks.find((task) => task.id === id);
      if (completedTask) {
        return [...prevTasks, completedTask];
      }
      return prevTasks;
    });
    setTasks(newTasks);

    console.log(newTasks);
  };

  function searchTask(val) {
    const filteredTasks = originalTasks.filter((task) => {
      return task.taskTitle.toLowerCase().includes(val.toLowerCase());
    });
    setTasks(filteredTasks);
  }

  function resetTasks() {
   
    setTasks(originalTasks);
    setCompletedTasks([]);
  }

  function dateTask(date) {
    const filteredTasks = originalTasks.filter((task) => {
      const taskDate = new Date(task.dueDate);
      return (
        taskDate.getFullYear() === date.getFullYear() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getDate() === date.getDate()
      );
    });
    setTasks(filteredTasks);
  }
  function updateTask(id, updatedTask) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, ...updatedTask };
        }
        return task;
      });
    });
  }

  const tasklist = tasks.length > 0?( tasks.map((task, i) => {
    return (
      <Cards
        key={i + 1}
        id={task.id}
        title={task.taskTitle}
        due={task.dueDate}
        desc={task.description}
        category={task.category}
        onDeleteTask={deleteTask}
      />
    );})):(
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h4>OOPS! No Tasks Found 😔</h4>
        
      </div>
    );
  

  const NavigateButton = () => {
    const navigate = useNavigate();

    return (
      <button
        onClick={() => navigate("/Addcards")}
        className="btn d-flex justify-content-center align-items-center rounded-circle"
        style={{
          backgroundColor: "#FFC785",
          color: "white",
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          fontWeight: "bold",
          fontSize: "34px",
          zIndex: 1000,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        +
      </button>
    );
  };
  function AppContent() {
    const location = useLocation();

    return (
      <>
        {location.pathname !== "/Addcards" &&
          !location.pathname.startsWith("/Editcards") && (
            <Navbar onSearchTask={searchTask} onResetTasks={resetTasks} />
          )}

        <Routes>
          <Route
            path="/"
            element={
              <div className="container-fixed p-2">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                      {tasklist}
                    </div>
                  </div>
                  <div className=" col-lg-3 col-md-4 col-sm-12">
                    <div className="mb-4">
                      <Calendarcard onSelectDate={dateTask} />
                    </div>
                    <div className="">
                      <Completedcards completedCards={completedTasks} />
                      <NavigateButton />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/Addcards"
            element={<Addcards onAddTask={addTask} len={tasks.length} />}
          />
          <Route
            path="/Editcards/:id"
            element={<Editcards onUpdateTask={updateTask} />}
          />
        </Routes>
      </>
    );
  }
  // basename = "/TaskNest"
  return (
    <Router basename="/TaskNest" >
      <AppContent />  
    </Router>
  );
}

export default App;
