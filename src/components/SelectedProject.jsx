import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onEdit, onTaskAdd, onTaskDelete, tasks }) {
    const formattedDate = new Date(project.deadline).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    const projectTasks = tasks.filter(task => task.projectId === project.id);

    return (
        <div className="w-full max-w-2xl mt-0 sm:mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
                    <h2 className="text-emerald-800 font-bold text-2xl sm:text-3xl text-center sm:text-left">{project.title}</h2>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <button onClick={onEdit} className="flex-1 sm:flex-none text-stone-800 hover:text-stone-950 hover:bg-stone-200 px-4 py-2 rounded transition text-sm">Edit</button>
                        <button onClick={onDelete} className="flex-1 sm:flex-none text-red-800 hover:text-red-950 hover:bg-red-100 px-4 py-2 rounded transition text-sm">Delete</button>
                    </div>
                </div>
                <p className="text-stone-700 mt-3 whitespace-pre-wrap break-words text-sm sm:text-base max-h-48 sm:max-h-none overflow-y-auto">{project.description}</p>
            </header>
            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                <p className="text-stone-400 text-xs sm:text-sm">{formattedDate}</p>
                <p className="text-stone-400 text-xs sm:text-sm text-right sm:text-left"><span className="font-semibold">Priority:</span> {project.priority}</p>
            </div>
            <Tasks tasks={projectTasks} onAdd={onTaskAdd} onDelete={onTaskDelete} />
        </div>
    );
}