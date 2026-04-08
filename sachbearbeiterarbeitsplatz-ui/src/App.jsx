import './App.css';
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TaskOverviewPage from "./pages/TaskOverviewPage";
import { useState, useEffect } from 'react';
import mockTasks from './mock/tasks.json';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  return (
    <div className="App">

      
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/task" element={<TaskOverviewPage tasks={tasks}/>} />
      </Routes>
    </div>
  );
}

export default App;