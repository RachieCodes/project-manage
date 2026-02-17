import { useRef } from "react";
import Input from "./Input"

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const deadline = useRef();
    const priority = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDeadline = deadline.current.value;
        const enteredPriority = priority.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            deadline: enteredDeadline,
            priority: enteredPriority
        });
    }

    return (
        <div className="w-[35rem] mt-16">
            <div>
                <Input ref={title} label="Project Name" id="project-name" type="text" placeholder="Enter project name" />
                <Input ref={description} label="Project Description" id="project-description" textarea placeholder="Enter project description" />
                <Input ref={deadline} label="Deadline" id="project-deadline" type="date" />
                <Input ref={priority} label="Priority" id="project-priority" type="text" />
            </div>
            <menu className = "flex item-center justify-end gap-4 mb-8">
                <li><button className="text-emerald-800 hover:text-emerald-950 px-4 py-2 rounded">Cancel</button></li>
                <li><button onClick={handleSave} className="bg-emerald-700 text-white px-4 py-2 rounded">Save</button></li>
            </menu>
        </div>
    );
}