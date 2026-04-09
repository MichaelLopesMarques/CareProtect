import React, { useState } from "react";
import CheckDoctorTask from "../components/tasks/CheckDoctorTask";
import { useNavigate } from 'react-router-dom';
import mockTasks from "../mock/tasks.json"

function CheckDoctorPage(){
    const navigate = useNavigate();

    const task = mockTasks.find(
        (task) => task.type === "CHECK_MANUAL_DOCTOR"
    );

    const taskComplete = (taskId) => {
        console.log("Task abgeschlossen:", taskId);
        navigate('/task');
    };

    return(
        <>
            <div>
                <h1 class="block font-medium p-2">
                    Arztsuche
                </h1>
            </div>
            <div>
                <CheckDoctorTask task={task} taskComplete={taskComplete} />
            </div>
        </>
    )
}

export default CheckDoctorPage;