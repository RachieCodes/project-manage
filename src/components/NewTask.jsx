import { useState } from "react";

export default function NewTask({ onAdd, onDelete }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(e) {
        setEnteredTask(e.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === "") return;
        onAdd(enteredTask);
        setEnteredTask("");
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 p-4 border border-stone-300 rounded bg-white">
            <input 
                onChange={handleChange} 
                onKeyPress={handleKeyPress}
                value={enteredTask} 
                type="text" 
                placeholder="Enter a task..." 
                className="flex-1 p-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm sm:text-base" 
            />
            <button 
                onClick={handleClick} 
                className="px-4 py-2 bg-emerald-800 text-white rounded hover:bg-emerald-700 transition text-sm sm:text-base font-medium"
            >
                Add Task
            </button>
        </div>
    );
}