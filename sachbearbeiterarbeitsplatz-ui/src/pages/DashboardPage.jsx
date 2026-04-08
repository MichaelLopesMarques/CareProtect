import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import mockTasks from '../mock/tasks.json';
import DoctorSearch from "../components/DoctorSearch";
import TaskList from "../components/TaskList";

function DashboardPage() {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setTasks(mockTasks);
    }, []);

    const filterDoctors = tasks.filter(task => 
        task.doctorName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div>
                <h1>Dashboard</h1> 
            </div>
            <div>
                <label>Es sind {tasks.length} Tasks noch offen </label>
                <div className="all-tasks-list" style={{ marginTop: "30px" }}>
                <h2>Aufgaben-Liste</h2>
                {tasks.map((task) => (
                    <TaskList key={task.id} task={task} />
                ))}
            </div>
            </div>
            <p />
            <div>
                <DoctorSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div>
                <button>Arzt Kontrolle</button><p />
                <button>Formular abtippen</button><p />
            <p />
                <Link to="/task">Task öffnen</Link>
            </div>
        </>
    )
}

export default DashboardPage;