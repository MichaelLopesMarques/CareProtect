import './App.css'
import Header from './components/Header.jsx'
import { useEffect, useState } from 'react'
import mockTasks from './mock/tasks.json'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(mockTasks);
  }, []);

  return (
    <>
      <Header />
      <div>
        <label>Es sind {tasks.length} Tasks noch offen </label>
      </div>
      <div>
        <button>Arzt Kontrolle</button><p></p>
        <button>Formular abtippen</button>
      </div>
    </>
  );
}

export default App
