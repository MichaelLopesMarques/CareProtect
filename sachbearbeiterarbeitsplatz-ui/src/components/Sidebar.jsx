import React, { useState } from "react";
import Logo from "../assets/react.svg"
import { Link } from "react-router-dom";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div class="py-8 flex justify-start">
                <img className="w-20" alt="Logo" src={Logo} />
            </div>
            <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                <nav class="mb-6">
                    <div>
                        <h2 class="mb-4 text-xs uppercase flex leading-5 text-gray-400 justify-start">Menü</h2>
                        <ul class="flex flex-col gap-1">
                            <li>
                                <Link to="/" class="p-2 hover:bg-gray-100 rounded transition-colors flex items-center">
                                    <span class="menu-item-text">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/task" class="p-2 hover:bg-gray-100 rounded transition-colors flex items-center">
                                    <span class="menu-item-text">Alle Aufgaben</span>
                                </Link>
                            </li>
                            <li class="flex flex-col">
                                <button onClick={() => setIsOpen(!isOpen)} class="p-2 hover:bg-gray-100 rounded cursor-pointer flex items-center justify-start text-left w-full">
                                    <span class="menu-item-text">Alle Tätigkeiten</span>
                                </button>
                                {isOpen && (
                                    <div class="overflow-hidden transition-all duration-300 mt-2 ml-4 border-l-2 border-gray-100">
                                        <ul class="mt-0 space-y-1 ml-2">
                                            <li>
                                                <Link to="/check-doctor" class="p-2 hover:bg-gray-100 rounded transition-colors">
                                                    <span class="menu-dropdown-item menu-dropdown-item-inactive">Arztverzeichnis</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/digitize-form" class="p-2 hover:bg-gray-100 rounded transition-colors">
                                                    <span class="menu-dropdown-item menu-dropdown-item-inactive">Formular digitalisieren</span>
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