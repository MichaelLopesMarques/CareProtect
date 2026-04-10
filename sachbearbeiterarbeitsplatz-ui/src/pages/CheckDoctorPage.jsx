import React, { useState } from "react";
import CheckDoctorTask from "../components/tasks/CheckDoctorTask";
import mockTasks from "../mock/tasks.json"

function CheckDoctorPage({taskComplete}){

    const task = mockTasks.find(
        (task) => task.type === "CHECK_MANUAL_DOCTOR"
    );

    return(
        <>
            <div>
                <CheckDoctorTask task={task} taskComplete={taskComplete}/>
            </div>
        </>
    )
}

export default CheckDoctorPage;