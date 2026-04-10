import { useParams } from "react-router-dom";
import CheckDoctorTask from "../components/tasks/CheckDoctorTask";
import DigitizeFormTask from "../components/tasks/DigitizeFormTask";

function TaskDetailPage({ tasks, taskComplete }) {
    const { taskId } = useParams();

    const task = tasks.find((task) => task.id === taskId);

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