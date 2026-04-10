import React from 'react';
import DigitizeFormTask from '../components/tasks/DigitizeFormTask';
import mockTasks from "../mock/tasks.json"

export default function DigitizeFormPage({taskComplete}) {

    const task = mockTasks.find(
        (task) => task.type === "CHECK_MANUAL_DOCTOR"
    );

    return (

        <div className='grid grid-cols-2'>
            <div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <DigitizeFormTask task={task} taskComplete={taskComplete} showPDF={false} />
                </div>
            </div>
        </div>
    );
} 