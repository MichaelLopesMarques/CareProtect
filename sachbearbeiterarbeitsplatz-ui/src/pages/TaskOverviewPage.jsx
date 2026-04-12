import { Link } from "react-router-dom";

function TaskOverviewPage({ tasks }) {
    // API example:
    // GET /tasks
    // fetch("/tasks")
    //   .then((res) => res.json())
    //   .then((data) => console.log("Loaded tasks:", data));

    console.log("GET /task", tasks);  
    
    const taskNames = {
        CHECK_MANUAL_DOCTOR: "Arzt Verifikation",
        DIGITIZE_SCANNED_FORM: "Formular nachtragen"
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-700">Offene Aufgaben</h2>
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                            {tasks.length} Gesamt
                        </span>
                    </div>
                    <div className="space-y-4">
                        {tasks.map((task) => (
                            <div key={task.id} className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-gray-900 text-lg">{taskNames[task.type]}</h3>
                                    <p className="text-xs text-gray-400 font-mono">ID: {task.id}</p>
                                </div>
                                <div className="text-sm text-gray-600 space-y-1 mb-12">
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
                                <div className="absolute bottom-4 right-4">
                                    <Link to={`/tasks/${task.id}`}>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-sm transition-colors flex items-center gap-2">
                                            Task bearbeiten
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Erledigte Aufgaben</h2>
                    <div className="border-2 border-gray-300 rounded-xl h-64 flex flex-col items-center justify-center text-gray-400 bg-gray-50/50">
                        <div className="text-4xl mb-2"></div>
                        <p className="font-medium text-xs">Erledigte Aufgaben erscheinen hier.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default TaskOverviewPage;