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


    return (
        <>
            <div>
                <label>Es sind {tasks.length} Tasks noch offen </label>
                <div className="mt-30px">
                <h2>Aufgaben-Liste</h2>
                {tasks.map((task) => (
                    <TaskList key={task.id} task={task} />
                ))}
                <Link to="/task">Task öffnen</Link>
            </div>
            </div>
            <p />
            <div>
                <h2>Arztverzeichnis</h2>
                <DoctorSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
        </>
    );
}

export default DashboardPage;