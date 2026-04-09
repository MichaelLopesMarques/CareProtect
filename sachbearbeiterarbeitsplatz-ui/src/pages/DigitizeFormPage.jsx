import React from 'react';
import DigitizeFormTask from '../components/tasks/DigitizeFormTask';
import { useNavigate } from 'react-router-dom';

export default function DigitizeFormPage() {
    const navigate = useNavigate();

    const handleTaskComplete = (id) => {
        console.log("Task mit ID " + id + " wurde abgeschlossen!");
        navigate('/task');
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <DigitizeFormTask 
                    taskId="12345" 
                    taskComplete={handleTaskComplete} 
                />
            </div>
        </div>
    );
}