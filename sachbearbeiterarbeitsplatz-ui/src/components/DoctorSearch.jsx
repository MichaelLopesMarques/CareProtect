import { useState } from "react";
import doctors from "../mock/doctors.json"

export default function DoctorSearch({ searchTerm, setSearchTerm }) {
    const [selectedDoctor, setSelectedDoctor] = useState(null); 
    const filterDoctors = doctors.filter((doctor) => doctor.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const isDropdownMenuVisible = searchTerm.length > 0 && selectedDoctor?.name !== searchTerm;

    return (
        <div className="relative w-full">
            <div className="relative">
                <input
                    type="text"
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                    placeholder="Ärzte durchsuchen"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setSelectedDoctor(null);    
                    }}
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                    🔍
                </div>
            </div>
            {isDropdownMenuVisible && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-xl max-h-60 overflow-y-auto">
                    {filterDoctors.map((doctor, index) => (
                        <li key={index}
                        onClick={() => {
                            setSelectedDoctor(doctor);
                            setSearchTerm(doctor.name);
                        }}
                        className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-none border-gray-100 transition-colors"
                        >
                            <div className="font-medium text-gray-800">{doctor.name}</div>
                            <div className="text-xs text-gray-500">{doctor.speciality} • {doctor.institute}</div>
                        </li>
                    ))}
                </ul>
            )}

            {selectedDoctor && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg animate-fadeIn">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-blue-800">Gefundene Stammdaten</h3>
                        <button 
                            onClick={() => setSelectedDoctor(null)}
                            className="text-xs text-blue-600 hover:underline"
                        >
                            Auswahl aufheben
                        </button>
                    </div>
                    <div className="text-sm space-y-1 text-gray-700">
                        <p><strong>Name:</strong> {selectedDoctor.name}</p>
                        <p><strong>Praxis:</strong> {selectedDoctor.institute}</p>
                        <p><strong>Adresse:</strong> {selectedDoctor.address}</p>
                        <p><strong>Email:</strong> {selectedDoctor.email}</p>
                        <p><strong>Fachrichtung:</strong> {selectedDoctor.speciality}</p>
                    </div>
                </div>
            )}
        </div>
    );
}