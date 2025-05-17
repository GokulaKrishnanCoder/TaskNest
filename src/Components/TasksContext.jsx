import { createContext,useContext,useState,useEffect } from "react";
import { db } from "/firebaseConfig";

import { collection, getDocs } from "firebase/firestore";


const TasksContext = createContext();
export function TasksProvider({ children }) {
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
          dueDate: doc.data().dueDate?.toDate(),
        }));
        setTasks(tasksArray);
         setOriginalTasks(tasksArray);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);
  return (
    <TasksContext.Provider value={{ tasks, setTasks,originalTasks,completedTasks,setCompletedTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
