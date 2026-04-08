import './App.css'
import Header from './components/Header.jsx'
import { useEffect, useState } from 'react'
import mockTasks from './mock/tasks.json'
import DoctorSearch from './components/DoctorSearch.jsx'

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  const filteredDoctors = tasks.filter(task => 
    task.doctorName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div>
        <label>Es sind {tasks.length} Tasks noch offen </label>
      </div>
      <div>
        <DoctorSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div>
        <button>Arzt Kontrolle</button><p></p>
        <button>Formular abtippen</button>
      </div>
    </>
  );
}

export default App
