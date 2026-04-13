function DigitizeFormTask({task, taskComplete, showPDF = true}) {
    // Verarbeitet das Formular und erstellt den API Payload
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

        // API Beispiel:
        // fetch(`/tasks/${task.id}`, {
        //   method: "PUT",
        //   headers: {
        //      "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify(task)
        // });

        alert("Formular erfolgreich übermittelt!");
        
        if (task && taskComplete) { 
            taskComplete(task.id); 
        }
    };

    const inputStyle = "w-full p-2 mb-3 border border-gray-200 rounded bg-white focus:ring-2 focus:ring-blue-500 outline-none text-sm";

    return (
        <div className={`flex gap-8 ${showPDF ? 'flex-row' : 'flex-col'}`}>
            <div className="flex-1">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-3">Arztdaten</h3>
                    <input name="doctorName" type="text" placeholder="Name des Arztes" className={inputStyle} required/>
                    <input name="doctorInstitute" type="text" placeholder="Medizinische Einrichtung" className={inputStyle} required/>
                    <input name="doctorAddress" type="text" placeholder="Adresse der Einrichtung" className={inputStyle} required/>
                    <input name="doctorEmail" type="email" placeholder="E-Mail" className={inputStyle} required/>
                    <input name="doctorSpeciality" type="text" placeholder="Fachrichtung" className={inputStyle} required/>
                    
                    <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mt-6 mb-3">Versichertendaten</h3>
                    <input name="clientName" type="text" placeholder="Name des Versicherten" className={inputStyle} required/>
                    <input name="clientAddress" type="text" placeholder="Adresse des Versicherten" className={inputStyle} required/>
                    <input name="clientEmail" type="email" placeholder="Email des Versicherten" className={inputStyle} required/>
                    <input name="clientDamageNumber" type="text" placeholder="Sachadensnummer des Versicherten" className={inputStyle} required/>

                    <button type="submit" className="mt-6 w-full bg-[#2C3E50] text-white py-3 rounded-lg font-bold hover:bg-[#3E5871] transition-colors shadow-sm text-sm">
                        Formular abschicken
                    </button>
                </form>
            </div>

            {showPDF && task && task.form && (
                <div className="flex-1 border-l border-gray-100 pl-8">
                    <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-3">
                        Dokument Vorschau
                    </h3>

                    <iframe
                        src={task.form}
                        width="100%"
                        height="642px"
                        title="PDF Vorschau"
                        className="border border-gray-200 rounded-lg shadow-inner"
                    />
                    <a
                        href={task.form}
                        download
                        className="inline-block mt-4 text-xs text-cyan-600 hover:text-cyan-700 font-semibold underline"
                    >
                        PDF downloaden
                    </a>
                </div>
            )}
        </div>
    )
}

export default DigitizeFormTask;