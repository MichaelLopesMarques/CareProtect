import { useState } from "react";
import doctors from "../mock/doctors.json"

export default function DoctorSearch({ searchTerm, setSearchTerm }) {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const filterDoctors = doctors.filter((doctor) => doctor.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="doctorSearch">
            <input
                type="text"
                className="doctorSearch-input"
                placeholder="Ärzte durchsuchen"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setSelectedDoctor(null);    
                }}
            />
            {searchTerm && (
                <ul>
                    {filterDoctors.map((doctor, index) => (
                        <li key={index}
                        onClick={() => setSelectedDoctor(doctor)}
                        style={{ cursor: "pointer"}}
                        >
                            {doctor.name} - {doctor.speciality}
                        </li>
                    ))}
                </ul>
            )}

            {selectedDoctor && (
                <div className="doctorDetails">
                    <h3>Arztdetails</h3>
                    <p><strong>Name:</strong> {selectedDoctor.name}</p>
                    <p><strong>Praxis:</strong> {selectedDoctor.institute}</p>
                    <p><strong>Adresse:</strong> {selectedDoctor.address}</p>
                    <p><strong>Email:</strong> {selectedDoctor.email}</p>
                    <p><strong>Fachrichtung:</strong> {selectedDoctor.speciality}</p>
                </div>
            )}
        </div>
    );
}