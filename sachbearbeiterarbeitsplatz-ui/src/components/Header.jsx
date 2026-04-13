import { useLocation } from "react-router-dom"

export default function Header() {
    const pageLocation = useLocation();

    const getTitle = (path) => {
        switch(path){
            case "/":
                return "Dashboard";
            case "/task":
                return "Aufgaben";
            case "/check-doctor":
                return "Arztverzeichnis";
            case "/digitize-form":
                return "Formular digitalisieren";
            default:
                return "Sachbearbeiter Arbeitsplatz"
        }
    };
    
    
    return (
        <header>
            <div className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
                <h1 className="text-xl font-semibold">{getTitle(pageLocation.pathname)}</h1>
            </div>
        </header>
    )
}