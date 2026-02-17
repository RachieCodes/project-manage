import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return (
        <aside className="w-full px-4 sm:px-6 py-6 sm:py-8 md:py-16 bg-emerald-900 text-emerald-50 h-full flex flex-col border-b md:border-b-0 md:border-r border-emerald-800 overflow-y-auto">
            <h2 className="mb-4 sm:mb-6 md:mb-8 font-bold uppercase text-sm sm:text-lg md:text-xl text-emerald-100">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-4 sm:mt-6 space-y-1 flex-1 overflow-y-auto">
                {projects.length === 0 && (
                    <li className="text-emerald-200 text-xs sm:text-sm italic py-2">No projects yet. Create one!</li>
                )}
                {projects.map(project => {
                    let cssClasses = "w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm text-emerald-100 hover:bg-emerald-800 transition text-xs sm:text-sm md:text-base";
                    if (project.id === selectedProjectId) {
                        cssClasses += " bg-emerald-800 text-white font-semibold";
                    }
                   return (
                    <li key={project.id}>
                        <button onClick={() => onSelectProject(project.id)} className={cssClasses} >{project.title}</button>
                    </li>
                   );
                })}
            </ul>                                
        </aside>
    );
}