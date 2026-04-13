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
  // Zentrale Speicherung aller offenen Aufgaben
  const [tasks, setTasks] = useState([]);
  
  const navigate = useNavigate();

  // Callback wird an Task-Komponenten weitergereicht,
  // sobald eine Aufgabe abgeschlossen wurde
  const handleTaskComplete = (id) => {
    console.log("Task erledigt:", id);
    navigate('/task')
  }

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  return (
    <>
      <div className='flex h-screen overflow-hidden'>
        
        <aside className='px-8 w-72 h-screen bg-[#2C3E50] border-r border-gray-200 shrink-0'>
          <Sidebar/>
        </aside>

        <div className='flex flex-col flex-1 h-screen overflow-hidden'>
          <Header className='sticky top-0 flex w-full bg-white border-gray-200 xl:border-b'/>
          
          <main className='flex-1 overflow-y-auto bg-[#f1f1f1] p-8'>
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