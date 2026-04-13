import { useState } from "react";
import DoctorSearch from "../DoctorSearch";

function CheckDoctorTask({task, taskComplete}) {
    // Suchtext für die Arztsuche
    const [searchTerm, setSearchTerm] = useState("");
    
    // Kopie des Arztdatensatzes zur Bearbeitung
    const [editedDoctor, setEditedDoctor] = useState(task?.doctor || {});
    
    // Übergibt die Daten an Backend / API
    const confirmDoctor = () => {
        console.log("Arzt bestätigt:", editedDoctor);

        console.log("PUT /tasks/" + task?.id);
        console.log({
            id: task.id,
            type: task.type,
            doctor: editedDoctor
        });

        // API Beispiel:
        // fetch(`/tasks/${task.id}`, {
        //   method: "PUT",
        //   headers: {
        //      "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({
        //      id: task.id,
        //      type: task.type,
        //      doctor: editedDoctor
        //   })
        // });

        alert("Arzt wurde erfolgreich bestätigt!");
        taskComplete(task.id);
        
    };

    // Übergibt die bearbeiteten Daten an Backend / API
    const saveCorrection = () => {
        console.log("Arzt korrigiert:", editedDoctor);

        console.log("PUT /tasks/" + task?.id);
        console.log({
            id: task.id,
            type: task.type,
            doctor: editedDoctor
        });

        // API Beispiel:
        // fetch(`/tasks/${task.id}`, {
        //   method: "PUT",
        //   headers: {
        //      "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({
        //      id: task.id,
        //      type: task.type,
        //      doctor: editedDoctor
        //   })
        // });

        alert("Arzt wurde erfolgreich korrigiert!");
        taskComplete(task.id);
    };

    const handleChange = (e) => {
        setEditedDoctor({
            ...editedDoctor,
            [e.target.name]: e.target.value
        });
    };
    
    const inputStyle = "w-full p-2 mb-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all";

    return (
        <main className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Arzt Prüfung</h2>

            <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 mb-8 border-l-4 border-l-[#2C3E50]">
                <h3 className="text-sm font-semibold text-[#3E5871] uppercase tracking-wider mb-3">Angegebener Arzt</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-gray-500 uppercase">Name: </p>
                        <p className="font-medium text-gray-900">{editedDoctor.name}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase">Praxis: </p>
                        <p className="font-medium text-gray-900">{editedDoctor.institute}</p>
                    </div>
                </div>
                <div className="mt-auto flex justify-end">
                    <button 
                        onClick={confirmDoctor} 
                        className="bg-[#588157] hover:bg-[#3a5a40] text-white font-bold py-2 px-6 rounded-lg shadow-sm transition-colors flex items-center gap-2">
                            Bestätigen
                    </button>
                </div>  
            </section>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Arztdatenbank durchsuchen</h3>
                    <DoctorSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Arzt bearbeiten</h3>
                    <div className="flex flex-col">
                        <label className="text-xs font-semibold text-gray-500 mb-1 ml-1">Name des Arztes:</label>
                        <input 
                            name="name"
                            value={editedDoctor.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className={inputStyle}
                        />
                        <label className="text-xs font-semibold text-gray-500 mb-1 ml-1">Medizinische Einrichtung:</label>
                        <input 
                            name="institute"
                            value={editedDoctor.institute}
                            onChange={handleChange}
                            placeholder="Praxis"
                            className={inputStyle}
                        />
                        <label className="text-xs font-semibold text-gray-500 mb-1 ml-1">Adresse der Einrichtung:</label>
                        <input 
                            name="address"
                            value={editedDoctor.address}
                            onChange={handleChange}
                            placeholder="Adresse"
                            className={inputStyle}
                        />
                        <label className="text-xs font-semibold text-gray-500 mb-1 ml-1">Email:</label>
                        <input 
                            name="email"
                            value={editedDoctor.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className={inputStyle}
                        />
                        <label className="text-xs font-semibold text-gray-500 mb-1 ml-1">Fachrichtung:</label>
                        <input 
                            name="speciality"
                            value={editedDoctor.speciality}
                            onChange={handleChange}
                            placeholder="Fachrichtung"
                            className={inputStyle}
                        />

                        <button 
                            onClick={saveCorrection}
                            className="mt-4 bg-[#2C3E50] hover:bg-[#3E5871] text-white py-3 rounded-lg font-bold shadow-md transition-all active:scale-95">
                                Korrektur speichern
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CheckDoctorTask;