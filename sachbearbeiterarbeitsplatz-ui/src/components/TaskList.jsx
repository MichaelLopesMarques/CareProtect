export default function TaskList({task}){
    const taskNames = {
        CHECK_MANUAL_DOCTOR: "Arzt Verifikation",
        DIGITIZE_SCANNED_FORM: "Formular nachtragen"
    };

    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-white transition-colors group">
            <h3 className="font-bold text-gray-800 text-sm">{taskNames[task.type]}</h3>
            <p className="text-[10px] text-gray-400 font-mono uppercase">ID: {task.id}</p>
        </div>

    );
}