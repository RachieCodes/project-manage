import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section className="w-full">
            <h2 className="text-emerald-800 mb-4 font-bold text-xl">Tasks</h2>
            <NewTask onAdd={onAdd} onDelete={onDelete} />
            {tasks.length === 0 && (<p className="text-stone-700 mt-4 text-sm">This project does not have any tasks yet.</p>)}
            {tasks.length > 0 && (
                <ul className="text-stone-700 mt-4 space-y-2">
                    {tasks.map(task => (
                        <li key={task.id} className="flex items-center justify-between p-3 bg-stone-100 rounded hover:bg-stone-200 transition">
                            <span className="flex-1 break-words text-sm sm:text-base">{task.text}</span>
                            <button onClick={() => onDelete(task.id)} className="ml-4 px-3 py-1 text-red-800 hover:text-red-950 hover:bg-red-100 rounded text-sm transition whitespace-nowrap">Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}