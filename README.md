# CareProtect – Digital Health Claims Manager

**CareProtect** ist eine modulare Frontend-Applikation zur Digitalisierung von Schadensprozessen im Versicherungswesen. [cite_start]Die Plattform dient als zentraler Arbeitsplatz für Sachbearbeiter, um manuelle Prüfschritte bei Personenschäden effizient und rechtssicher zu bearbeiten[cite: 15, 17].

---

## 📋 Projektüberblick

[cite_start]Im Bereich der Haftpflichtversicherung ist die Koordination zwischen Versicherer, Geschädigtem und Arzt oft durch Medienbrüche geprägt[cite: 7, 9]. [cite_start]CareProtect schließt diese Lücke durch ein Task-basiertes System, das sowohl volldigitale als auch papierbasierte Workflows unterstützt[cite: 18, 20].

### Kernfunktionen (MVP)
* [cite_start]**Arzt-Validierung:** Überprüfung und Freigabe manuell erfasster Medizinerdaten, die nicht in der Standarddatenbank enthalten sind[cite: 21, 24].
* [cite_start]**Legacy-Beleg-Digitalisierung:** Erfassung von Arztdaten aus eingescannten Papier-Einwilligungserklärungen inklusive Auslösen digitaler Attestanfragen[cite: 25, 27].
* [cite_start]**Skalierbare Task-Architektur:** Das System ist so konzipiert, dass neue Aufgabentypen (z.B. Schmerzensgeldprüfung) mit minimalem Aufwand integriert werden können[cite: 18].

---

## 🛠️ Technische Umsetzung

[cite_start]Das Projekt basiert auf einer modernen Web-Architektur und kommuniziert mit einem standardisierten REST-Backend via OpenAPI-Spezifikation[cite: 19, 30].

### Tech-Stack
* **Frontend:** [Hier Framework einfügen, z.B. React / Vue.js]
* [cite_start]**API-Integration:** Axios / Fetch API basierend auf OpenAPI Spec [cite: 29]
* **Styling:** [Hier Tool einfügen, z.B. Tailwind CSS / SCSS]
* **State Management:** [Hier Tool einfügen, z.B. Redux / Pinia]

---

## ⚙️ Workflow-Prozess

[cite_start]Das System bildet den komplexen Prozess der Personenschadenbearbeitung digital ab[cite: 7]:
1.  [cite_start]**Einwilligung:** Einholung der Entbindung von der ärztlichen Schweigepflicht (digital oder via Papier)[cite: 10, 26].
2.  [cite_start]**Validierung:** Sachbearbeiter prüft die medizinischen Ansprechpartner in CareProtect[cite: 21].
3.  [cite_start]**Attestanfrage:** Automatisierte digitale Anfrage bei den behandelnden Ärzten[cite: 12, 13].
4.  [cite_start]**Abschluss:** Finale Entscheidung über Schmerzensgeldzahlungen basierend auf validierten Daten[cite: 14].

---

## 🚀 Installation & Setup

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/DeinNutzername/CareProtect.git](https://github.com/DeinNutzername/CareProtect.git)
    ```
2.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```
3.  **Anwendung starten:**
    ```bash
    npm run dev
    ```

---

## 📄 Lizenz & Hintergrund

[cite_start]Dieses Projekt wurde als Case Study für einen technischen Dienstleister im Versicherungsumfeld entwickelt[cite: 1, 7]. [cite_start]Es demonstriert die Fähigkeit, komplexe Business-Logik in eine benutzerfreundliche Oberfläche zu übersetzen und dabei strikte Anforderungen an Datensicherheit und Erweiterbarkeit einzuhalten[cite: 17, 18].

---
*Entwickelt von Michael Lopes Marques – 2026*