import React, { useState ,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./App.css";

import Home from "./component/home.jsx";
import AllTasks from "./component/allTasks.jsx";
import AddTask from "./component/addTask.jsx";
import UpdateTask from "./component/updateTask.jsx";
import TaskDetails from "./component/task.jsx";
import Navbar from "./component/navBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [Filtered, setFiltered] = useState('');
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };
  const updateTask = (id, updatedTask) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = { ...updatedTasks[index], ...updatedTask };
      setTasks(updatedTasks);
    }
  };
/*
  useEffect(() => {
    if (Filtered === '') {
      setFiltered(tasks);
    } else {
      setFiltered(
        tasks.filter((task) =>
          task.post_name.toLowerCase().includes(Filtered.toLowerCase())
        )
      );
    }
  }, [tasks, Filtered]);
*/
  const { id } = useParams();

  return (
    <Router>
      
        <div className="App">

         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/all-tasks"
            element={
              <>
              <Navbar setFiltered={setFiltered} />
               <AllTasks
              
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
            </>
            }
          />
          <Route path="/add-task" element={<>  <Navbar/> <AddTask userId={id} /> </> } />
          <Route path="/update-task/:id" element={<>   <UpdateTask /> </>} />
          <Route path="/task/:id" element={<> <Navbar/> <TaskDetails /> </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
