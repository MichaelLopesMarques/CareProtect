import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";
import Home from "../assets/home.svg";
import AllTask from "../assets/task.svg";
import Work from "../assets/work.svg";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = "group p-2 hover:bg-white/10 rounded-lg transition-all flex items-center gap-4";
    const iconStyle = "w-5 h-5 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity";
    const textStyle = "menu-item-text text-white/90 group-hover:text-white transition-colors font-medium";

    return (
        <>
            <div className="py-8 flex justify-start">
                <img className="w-20" alt="Logo" src={Logo} />
                <span className="text-white font-bold text-xl tracking-tight leading-none">
                    CareProtect
                </span>
            </div>
            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                <nav className="mb-6">
                    <div>
                        <h2 className="mb-4 text-xs uppercase flex leading-5 text-gray-300 justify-start">Menü</h2>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <Link to="/" className={linkStyle}>
                                    <img src={Home} alt="" className={iconStyle} />
                                    <span className={textStyle}>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/task" className={linkStyle}>
                                    <img src={AllTask} alt="" className={iconStyle} />
                                    <span className={textStyle}>Aufgaben</span>
                                </Link>
                            </li>
                            <li className="flex flex-col">
                                <button onClick={() => setIsOpen(!isOpen)} className={linkStyle}>
                                    <img src={Work} alt="" className={iconStyle} />
                                    <span className={textStyle}>Arbeitsbereiche</span>
                                </button>
                                {isOpen && (
                                    <div className="overflow-hidden transition-all duration-300 mt-2 ml-4 border-l-2 border-gray-100">
                                        <ul className="mt-0 space-y-1 ml-2">
                                            <li>
                                                <Link to="/check-doctor" className={linkStyle}>
                                                    <span className={textStyle}>Arztverzeichnis</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/digitize-form" className={linkStyle}>
                                                    <span className={textStyle}>Formular digitalisieren</span>
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