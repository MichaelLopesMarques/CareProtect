import { useState } from "react";

function DigitizeFormTask({task, taskComplete, showPDF = true}) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const payload = {
            id: task?.id,
            type: "DIGITIZE_SCANNED_FORM",
            claimant: {
                name: formData.get("clientName"),
                address: formData.get("clientAddress"),
                email: formData.get("clientEmail")
            },
            damageNumber: formData.get("clientDamageNumber"),
            doctors: [
                {
                    name: formData.get("doctorName"),
                    institute: formData.get("doctorInstitute"),
                    address: formData.get("doctorAddress"),
                    email: formData.get("doctorEmail"),
                    speciality: formData.get("doctorSpeciality")
                }
            ]
        };

        console.log("PUT /tasks/" + task?.id, payload);
        alert("Formular erfolgreich übermittelt!");
        
        if (task && taskComplete) { 
            taskComplete(task.id); 
        }
    };

    const inputStyle = "w-full p-2 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none";

    return (
        <main className="flex gap-6 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-6 text-gray-800">Formular digitalisieren</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <h3 className="text-sm font-semibold uppercase text-gray-500 mt-4 mb-2">Arztdaten</h3>
                    <input name="doctorName" type="text" placeholder="Name des Arztes" className={inputStyle} required/>
                    <input name="doctorInstitute" type="text" placeholder="Medizinische Einrichtung" className={inputStyle} required/>
                    <input name="doctorAddress" type="text" placeholder="Adresse der Einrichtung" className={inputStyle} required/>
                    <input name="doctorEmail" type="email" placeholder="E-Mail" className={inputStyle} required/>
                    <input name="doctorSpeciality" type="text" placeholder="Fachrichtung" className={inputStyle} required/>
                    
                    <h3 className="text-sm font-semibold uppercase text-gray-500 mt-4 mb-2">Versichertendaten</h3>
                    <input name="clientName" type="text" placeholder="Name des Versicherten" className={inputStyle} required/>
                    <input name="clientAddress" type="text" placeholder="Adresse des Versicherten" className={inputStyle} required/>
                    <input name="clientEmail" type="email" placeholder="Email des Versicherten" className={inputStyle} required/>
                    <input name="clientDamageNumber" type="text" placeholder="Sachadensnummer des Versicherten" className={inputStyle} required/>

                    <button type="submit" className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md">
                        Formular abschicken
                    </button>
                </form>
            </div>
            {showPDF && task && task.form && (
                <div className="flex-1">
                    <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2">
                        Dokument Vorschau
                    </h3>

                    <iframe
                        src={task.form}
                        width="100%"
                        height="642px"
                        title="PDF Vorschau"
                        className="border border-gray-300 rounded"
                    />
                    <a
                        href={task.form}
                        download
                        className="inline-block mt-4 bg-gray-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-700 transition-colors shadow-md"
                    >
                        PDF downloaden
                    </a>
                </div>
            )}
        </main>
    )
}

export default DigitizeFormTask;