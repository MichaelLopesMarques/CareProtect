import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import mockTasks from '../mock/tasks.json';
import DoctorSearch from "../components/DoctorSearch";
import TaskList from "../components/TaskList";

function DashboardPage() {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setTasks(mockTasks);
    }, []);


    return (
        <main className="max-w-7xl mx-auto p-6">
            <div>
                <h2 className="text-gray-500"> Willkommen zurück!</h2>
                <label className="text-gray-500">Es sind {tasks.length} Aufgaben noch offen</label>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 items-start">
                    
                    <div className="space-y-6">
                        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            
                            <div className="p-4 border-b border-gray-100 bg-gray-50">
                                <h2 className="font-bold text-gray-700 uppercase text-xs tracking-wider">Aufgaben-Liste</h2>
                            </div>  

                            <div className="p-4 space-y-3">
                                {tasks.map((task) => (
                                    <TaskList key={task.id} task={task} />
                                ))}
                                <div className="pt-4 border-t border-gray-100 flex justify-end">
                                    <Link 
                                        to="/task"
                                        className="text-sm text-cyan-600 hover:text-cyan-700 font-semibold hover:underline">
                                            Task öffnen
                                    </Link>
                                </div>
                            </div>    
                        </section>
                    </div>    
            
                    <aside>
                        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
                                <h2 className="font-bold text-gray-700 uppercase text-xs tracking-wider mb-4">
                                    Arztverzeichnis
                                </h2>
                                <div className="w-full">
                                    <DoctorSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    );
}

export default DashboardPage;