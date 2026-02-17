import { useRef } from "react";
import Input from "./Input"
import Modal from "./Modal";

export default function EditProject({ project, onSave, onCancel}) {

    const modalRef = useRef();

    const title = useRef();
    const description = useRef();
    const deadline = useRef();
    const priority = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDeadline = deadline.current.value;
        const enteredPriority = priority.current.value;

        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDeadline.trim() === "" || enteredPriority.trim() === "") {
            modalRef.current.open();
            return;
        }

        onSave({
            title: enteredTitle,
            description: enteredDescription,
            deadline: enteredDeadline,
            priority: enteredPriority
        });
    }

    return (
        <>
        <Modal ref={modalRef} buttonCaption="Okay">
            <h2 className="text-red-800 font-bold"> Invalid Input</h2>
            <p className="text-stone-700 p-2">Please fill out all fields before saving the project.</p>
        </Modal>
        <div className="w-full max-w-2xl mt-0 sm:mt-16">
            <h1 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-8">Edit Project</h1>
            <div>
                <Input ref={title} label="Project Name" id="project-name" type="text" placeholder="Enter project name" defaultValue={project.title} />
                <Input ref={description} label="Project Description" id="project-description" textarea placeholder="Enter project description" defaultValue={project.description} />
                <Input ref={deadline} label="Deadline" id="project-deadline" type="date" defaultValue={project.deadline} />
                <Input ref={priority} label="Priority" id="project-priority" type="text" placeholder="e.g., High, Medium, Low" defaultValue={project.priority} />
            </div>
            <menu className="flex gap-2 sm:gap-4 mb-8 mt-8">
                <li><button onClick={onCancel} className="flex-1 sm:flex-none text-stone-800 hover:text-stone-950 hover:bg-stone-200 px-4 py-2 rounded transition text-sm">Cancel</button></li>
                <li><button onClick={handleSave} className="flex-1 sm:flex-none bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-600 transition text-sm font-medium">Save Changes</button></li>
            </menu>
        </div>
        </>
    );
}
