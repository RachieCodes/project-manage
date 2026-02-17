import noProject from '../assets/notasks.png';
import Button from './Button';

export default function NoProject({ onStartAddProject }) {
    return (
        <div className="w-[35rem] mt-16">
            <img src={noProject} alt="No Project Selected"/>
            <h2 className="text-center text-emerald-800 mt-4 font-bold text-lg">No Project Selected</h2>
            <p className="text-center text-emerald-600 mt-2 mb-3">Please select a project from the sidebar or create a new one.</p>
            <div className="text-center">
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
        </div>
    );
}