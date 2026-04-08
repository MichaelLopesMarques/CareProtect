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

        taskComplete(taskId);
    };

    return (
        <main>
        <h2>Formular digitalisieren</h2>
            <form onSubmit={handleSubmit}>
                <input name="doctorName" type="text" placeholder="Name des Arztes" validate={required()}/>
                <input name="doctorInstitute" type="text" placeholder="Medizinische Einrichtung" validate={required()}/>
                <input name="doctorAddress" type="text" placeholder="Adresse der Einrichtung" validate={required()}/>
                <input name="doctorEmail" type="email" placeholder="E-Mail" validate={required()}/>
                <input name="doctorSpeciality" type="text" placeholder="Fachrichtung" validate={required()}/>

                <input name="clientName" type="text" placeholder="Name des Versicherten" validate={required()}/>
                <input name="clientAddress" type="text" placeholder="Adresse des Versicherten" validate={required()}/>
                <input name="clientEmail" type="email" placeholder="Email des Versicherten" validate={required()}/>
                <input name="clientDamageNumber" type="text" placeholder="Sachadensnummer des Versicherten" validate={required()}/>

                <button type="submit">Formular abschicken</button>
            </form>
        </main>
    )
}

export default DigitizeFormTask;