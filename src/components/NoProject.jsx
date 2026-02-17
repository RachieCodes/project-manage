import noProject from '../assets/notasks.png';
import Button from './Button';

export default function NoProject({ onStartAddProject }) {
    return (
        <div className="w-full max-w-2xl mt-0 sm:mt-16 flex flex-col items-center justify-center">
            <img src={noProject} alt="No Project Selected" className="h-auto"/>
            <h2 className="text-center text-emerald-800 mt-4 font-bold text-lg">No Project Selected</h2>
            <p className="text-center text-emerald-600 mt-2 mb-4 text-sm sm:text-base max-w-sm">Please select a project from the sidebar or create a new one.</p>
            <div className="text-center w-full sm:w-auto">
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
        </div>
    );
}