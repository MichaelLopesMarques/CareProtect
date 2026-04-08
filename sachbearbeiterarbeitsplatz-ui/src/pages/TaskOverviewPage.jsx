import React from "react";
import { Link } from "react-router-dom";

function TaskOverviewPage({ tasks }) {
    const taskNames = {
        CHECK_MANUAL_DOCTOR: "Arzt Verifikation",
        DIGITIZE_SCANNED_FORM: "Formular nachtragen"
    };

    return (
        <div>
            <h1>Alle Aufgaben</h1>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{taskNames[task.type]}</h3>
                    <p>ID: {task.id}</p>

                    {task.type === "CHECK_MANUAL_DOCTOR" && (
                        <>
                            <p>Arzt: {task.doctor.name}</p>
                            <p>Medizinische Einrichtung: {task.doctor.institute}</p>
                            <p>Adresse: {task.doctor.address}</p>
                            <p>Email: {task.doctor.email}</p>
                            <p>Fachrichtung: {task.doctor.speciality}</p>
                        </>
                    )}

                    {task.type === "DIGITIZE_SCANNED_FORM" && (
                        <p>Formular: {task.form}</p>
                    )}
                </div>
            ))}
            <div>
                <Link to="/">Dashboard</Link>
            </div>
        </div>
    )
}

export default TaskOverviewPage;