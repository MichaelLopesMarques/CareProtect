export default function TaskList({task}){
    const taskNames = {
        CHECK_MANUAL_DOCTOR: "Arzt Verifikation",
        DIGITIZE_SCANNED_FORM: "Formular nachtragen"
    };

    return (
        <div className="taskList">
            <h3>{taskNames[task.type]}</h3>
            <p>ID: {task.id}</p>
        </div>

    );
}