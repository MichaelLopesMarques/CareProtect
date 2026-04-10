import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TaskOverviewPage from "./pages/TaskOverviewPage";
import { useState, useEffect } from 'react';
import mockTasks from './mock/tasks.json';
import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import CheckDoctorPage from "./pages/CheckDoctorPage";
import DigitizeFormPage from "./pages/DigitizeFormPage";
import TaskDetailPage from "./pages/TaskDetailPage";
import { useNavigate } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const handleTaskComplete = (id) => {
    console.log("Task erledigt:", id);
    navigate('/task')
  }

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  return (
    <>
      <div class='flex h-screen overflow-hidden'>
        
        <aside class='px-8 w-72 h-screen bg-white border-r border-gray-200 shrink-0'>
          <Sidebar/>
        </aside>

        <div class='flex flex-col flex-1 h-screen overflow-hidden'>
          <Header class='sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 xl:border-b'/>
          <main class='flex-1 overflow-y-auto bg-[#f1f1f1] p-8'>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/task" element={<TaskOverviewPage tasks={tasks} />} />
              <Route path="/tasks/:taskId" element={<TaskDetailPage tasks={tasks} taskComplete={handleTaskComplete} />} />
              <Route path="/check-doctor" element={<CheckDoctorPage taskComplete={handleTaskComplete}/>} />
              <Route path="/digitize-form" element={<DigitizeFormPage taskComplete={handleTaskComplete}/>} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;