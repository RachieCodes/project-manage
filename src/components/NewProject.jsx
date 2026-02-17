import Input from "./Input"

export default function NewProject() {
    return (
        <div className="w-[35rem] mt-16">
            <div>
                <Input label="Project Name" id="project-name" type="text" placeholder="Enter project name" />
                <Input label="Project Description" id="project-description" textarea placeholder="Enter project description" />
                <Input label="Deadline" id="project-deadline" type="date" />
                <Input label="Priority" id="project-priority" type="text" />
            </div>
            <menu className = "flex item-center justify-end gap-4 mb-8">
                <li><button className="text-emerald-800 hover:text-emerald-950 px-4 py-2 rounded">Cancel</button></li>
                <li><button className="bg-emerald-700 text-white px-4 py-2 rounded">Save</button></li>
            </menu>
        </div>
    );
}