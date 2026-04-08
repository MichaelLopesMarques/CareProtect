function DigitizeFormTask() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        for(let [key, value] of formData.entries()) {
            console.log({key, value});
        }
    };

    return (
        <main>
        <h2>Formular digitalisieren</h2>
            <form onSubmit={handleSubmit}>
                <input name="doctorName" type="text" placeholder="Name des Arztes" />
                <input name="doctorInstitute" type="text" placeholder="Medizinische Einrichtung" />
                <input name="doctorAddress" type="text" placeholder="Adresse der Einrichtung" />
                <input name="doctorEmail" type="email" placeholder="E-Mail" />
                <input name="doctorSpeciality" type="text" placeholder="Fachrichtung" />

                <input name="clientName" type="text" placeholder="Name des Versicherten" />
                <input name="clientAddress" type="text" placeholder="Adresse des Versicherten" />
                <input name="clientEmail" type="email" placeholder="Email des Versicherten" />
                <input name="clientDamageNumber" type="text" placeholder="Sachadensnummer des Versicherten" />

                <button type="submit">Senden</button>
            </form>
        </main>
    )
}

export default DigitizeFormTask;