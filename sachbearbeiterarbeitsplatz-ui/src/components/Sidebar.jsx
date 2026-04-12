import { useState } from "react";
import Logo from "../assets/react.svg"
import { Link } from "react-router-dom";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="py-8 flex justify-start">
                <img className="w-20" alt="Logo" src={Logo} />
            </div>
            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                <nav className="mb-6">
                    <div>
                        <h2 className="mb-4 text-xs uppercase flex leading-5 text-gray-400 justify-start">Menü</h2>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <Link to="/" className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center">
                                    <span className="menu-item-text">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/task" className="p-2 hover:bg-gray-100 rounded transition-colors flex items-center">
                                    <span className="menu-item-text">Alle Aufgaben</span>
                                </Link>
                            </li>
                            <li className="flex flex-col">
                                <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded cursor-pointer flex items-center justify-start text-left w-full">
                                    <span className="menu-item-text">Alle Tätigkeiten</span>
                                </button>
                                {isOpen && (
                                    <div className="overflow-hidden transition-all duration-300 mt-2 ml-4 border-l-2 border-gray-100">
                                        <ul className="mt-0 space-y-1 ml-2">
                                            <li>
                                                <Link to="/check-doctor" className="p-2 hover:bg-gray-100 rounded transition-colors">
                                                    <span className="menu-dropdown-item menu-dropdown-item-inactive">Arztverzeichnis</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/digitize-form" className="p-2 hover:bg-gray-100 rounded transition-colors">
                                                    <span className="menu-dropdown-item menu-dropdown-item-inactive">Formular digitalisieren</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;