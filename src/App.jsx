import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards";

import "./App.css";
import Navbar from "./Components/Navbar";
import Addtask from "./Components/Addtask";
import Edittask from "./Components/Edittask";
import { TasksProvider } from "./Components/TasksContext";
import Content from "./Components/Content";

function App() {
  return (
    <TasksProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Content/>
              </>
            }
          />
          <Route path="/tasks/new" element={<Addtask />} />
          <Route path="/tasks/edit/:id" element={<Edittask />} />
        </Routes>
      </Router>
    </TasksProvider>
  );
}

export default App;
