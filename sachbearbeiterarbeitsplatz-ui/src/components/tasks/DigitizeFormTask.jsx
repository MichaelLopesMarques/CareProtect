import { useState } from "react";

function DigitizeFormTask({ taskId, taskComplete}) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const payload = {
            id: taskId,
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

        console.log("PUT /tasks/" + taskId, payload);
        alert("Formular erfolgreich übermittelt!");

        taskComplete(taskId);
    };

    const inputStyle = "w-full p-2 mb-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none";

    return (
        <main className="bg-white p-6 rounded-lg shadow-sm">
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

                <button type="submit" className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md">Formular abschicken</button>
            </form>
        </main>
    )
}

export default DigitizeFormTask;