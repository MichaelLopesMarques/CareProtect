import DigitizeFormTask from '../components/tasks/DigitizeFormTask';
import mockTasks from "../mock/tasks.json"

export default function DigitizeFormPage({taskComplete}) {

    const task = mockTasks.find(
        (task) => task.type === "DIGITIZE_SCANNED_FORM"
    );

    return (
        <main className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1">
                <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 bg-gray-50">
                        <h2 className="font-bold text-gray-700 uppercase text-xs tracking-wider">
                            Formular digitalisieren
                        </h2>
                    </div>
                        <div className="p-8">
                            <DigitizeFormTask task={task} taskComplete={taskComplete} showPDF={false} />
                        </div>
                </section>
            </div>
        </main>
    );
} 