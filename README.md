# CareProtect – Digital Health Claims Manager

**CareProtect** ist eine modulare Frontend-Applikation zur Digitalisierung von Schadensprozessen im Versicherungswesen. Die Plattform dient als zentraler Arbeitsplatz für Sachbearbeiter, um manuelle Prüfschritte bei Personenschäden effizient und rechtssicher zu bearbeiten.

---

## 🚀 Das Projekt

Im Bereich der Haftpflichtversicherung ist die Koordination zwischen Versicherer, Geschädigtem und Arzt oft durch Medienbrüche geprägt. CareProtect schließt diese Lücke durch ein Task-basiertes System, das sowohl volldigitale als auch papierbasierte Workflows unterstützt.

### Kernfunktionen (MVP)
* **Arzt-Validierung:** Überprüfung und Freigabe manuell erfasster Medizinerdaten, die nicht in der Standarddatenbank enthalten sind.
* **Legacy-Beleg-Digitalisierung:** Erfassung von Arztdaten aus eingescannten Papier-Einwilligungserklärungen inklusive Auslösen digitaler Attestanfragen.
* **Skalierbare Task-Architektur:** Das System ist so konzipiert, dass neue Aufgabentypen (z.B. Schmerzensgeldprüfung) mit minimalem Aufwand integriert werden können.

---

## 🛠️ Technische Umsetzung

Das Projekt basiert auf einer modernen Web-Architektur und kommuniziert mit einem standardisierten REST-Backend via OpenAPI-Spezifikation.

### Tech-Stack
* **Frontend:** [Z.B. React / Vue.js / Angular]
* **API-Integration:** Axios / Fetch API basierend auf OpenAPI Spec
* **Styling:** [Z.B. Tailwind CSS / Material UI]
* **State Management:** [Z.B. Redux / Pinia / Context API]

---

## ⚙️ Workflow-Prozess

Das System bildet den komplexen Prozess der Personenschadenbearbeitung digital ab:
1. **Einwilligung:** Einholung der Entbindung von der ärztlichen Schweigepflicht (digital oder via Papier).
2. **Validierung:** Sachbearbeiter prüft die medizinischen Ansprechpartner in der CareProtect-Oberfläche.
3. **Attestanfrage:** Automatisierte digitale Anfrage bei den behandelnden Ärzten zur Dokumentation der Verletzungen.
4. **Abschluss:** Finale Entscheidung über Schmerzensgeldzahlungen basierend auf den validierten digitalen Attesten.

---

## 🏗️ Architektur & Skalierbarkeit

Ein zentraler Fokus bei der Entwicklung lag auf der **Erweiterbarkeit**. Da der Bereich Personenschaden ständig neue Anforderungen stellt, nutzt das Frontend ein modulares Task-Konzept. Zukünftige Features können als eigenständige Komponenten in das bestehende Dashboard eingeklinkt werden, ohne die Kernlogik zu verändern.

---

## 🏃‍♂️ Installation & Setup

1. **Repository klonen:**
   ```bash
   git clone [https://github.com/DeinNutzername/CareProtect.git](https://github.com/DeinNutzername/CareProtect.git)