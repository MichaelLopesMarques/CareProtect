import { useParams } from "react-router-dom";
import CheckDoctorTask from "../components/tasks/CheckDoctorTask";
import DigitizeFormTask from "../components/tasks/DigitizeFormTask";

function TaskDetailPage({ tasks, taskComplete }) {
    // Liest die Task-ID aus der URL
    const { taskId } = useParams();

    // Sucht die passende Aufgabe im globalen Task-State
    const task = tasks.find((task) => task.id === taskId);

    // Rendert je nach Task-Typ die passende Fachkomponente
    if (!task) {
        return <p>Task nicht gefunden</p>;
    }

    if (task?.type === "CHECK_MANUAL_DOCTOR") {
        return (
            <CheckDoctorTask
                task={task}
                taskComplete={taskComplete}
            />
        );
    }

    if (task?.type === "DIGITIZE_SCANNED_FORM") {
        return (
            <DigitizeFormTask
                task={task}
                taskComplete={taskComplete}
            />
        );
    }

    return <p>Unbekannter Tasktyp</p>;
}

export default TaskDetailPage;