import { useState } from "react";
import DoctorSearch from "../DoctorSearch";

function CheckDoctorTask({ task, taskComplete }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [editedDoctor, setEditedDoctor] = useState(task?.doctor || {});
    
    const confirmDoctor = () => {
        console.log("Arzt bestätigt:", editedDoctor);
        taskComplete(task.id);
        alert("Arzt wurde erfolgreich bestätigt!");
    };

    const saveCorrection = () => {
        console.log("Arzt korrigiert:", editedDoctor);
        taskComplete(task.id);
        alert("Arzt wurde erfolgreich korrigiert!");
    };

    const handleChange = (e) => {
        setEditedDoctor({
            ...editedDoctor,
            [e.target.name]: e.target.value
        });
    };
    
    return (
        <main>
            <h2>Arzt Prüfung</h2>

            <h3>Angegebener Arzt</h3>
            <p>Name: {editedDoctor.name}</p>
            <p>Praxis: {editedDoctor.institute}</p>

            <DoctorSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <button onClick={confirmDoctor}>Bestätigen</button>

            <h3>Arzt bearbeiten</h3>
            <input 
                name="name"
                value={editedDoctor.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input 
                name="institute"
                value={editedDoctor.institute}
                onChange={handleChange}
                placeholder="Praxis"
            />
            <input 
                name="address"
                value={editedDoctor.address}
                onChange={handleChange}
                placeholder="Adresse"
            />
            <input 
                name="email"
                value={editedDoctor.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input 
                name="speciality"
                value={editedDoctor.speciality}
                onChange={handleChange}
                placeholder="Fachrichtung"
            />

            <button onClick={saveCorrection}>Korrektur speichern</button>
        </main>
    );
}

export default CheckDoctorTask;