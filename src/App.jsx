
import ProjectSidebar from './components/projectSidebar';
import NewProject from './components/NewProject'; 
import EditProject from './components/EditProject';
import NoProject from './components/NoProject';
import SelectedProject from './components/SelectedProject';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    editingProjectId: undefined,
    projects: [],
    tasks: []
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleAddTask(text) {
    setProjectState(prevState => {
      const taskId = uuidv4();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectState(prevState => {
      const updatedTasks = prevState.tasks.filter(task => task.id !== taskId);
      return {
        ...prevState,
        tasks: updatedTasks
      };
    });
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
    setMobileMenuOpen(false);
  }

  function handleCancelProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: uuidv4()
      };  
      return {
        ...prevState,
        selectedProjectId: newProject.id,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      };
    });
  }

  function handleDeleteProject(projectId) {
    setProjectState(prevState => {
      const updatedProjects = prevState.projects.filter(project => project.id !== projectId);
      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectId: undefined,
        editingProjectId: undefined
      };
    });
  }

  function handleStartEditProject(projectId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        editingProjectId: projectId
      };
    });
  }

  function handleEditProject(projectData) {
    setProjectState(prevState => {
      const updatedProjects = prevState.projects.map(project => 
        project.id === prevState.editingProjectId 
          ? { ...project, ...projectData }
          : project
      );
      return {
        ...prevState,
        projects: updatedProjects,
        editingProjectId: undefined
      };
    });
  }

  function handleCancelEdit() {
    setProjectState(prevState => {
      return {
        ...prevState,
        editingProjectId: undefined
      };
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  const editingProject = projectState.projects.find(project => project.id === projectState.editingProjectId);

  let content = <SelectedProject project={selectedProject} onTaskAdd={handleAddTask} onTaskDelete={handleDeleteTask} tasks={projectState.tasks} />;

  if (projectState.editingProjectId !== undefined) {
    content = <EditProject project={editingProject} onSave={handleEditProject} onCancel={handleCancelEdit} />;
  }
  else if (projectState.selectedProjectId === null) {    
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>
  }
  else if (projectState.selectedProjectId === undefined) 
  {
    content = <NoProject onStartAddProject={handleStartAddProject}/>;
  }
  else {
    content = <SelectedProject project={selectedProject} onEdit={() => handleStartEditProject(selectedProject.id)} onDelete={() => handleDeleteProject(selectedProject.id)} onTaskAdd={handleAddTask} onTaskDelete={handleDeleteTask} tasks={projectState.tasks} />;
  }

  return (
    <main className="h-screen flex flex-col md:flex-row gap-0 relative">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-0 left-0 z-50 h-10 w-10 flex items-center justify-center bg-gradient-to-b from-emerald-800 to-emerald-900 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl group active:scale-95"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Hamburger Icon */}
          <svg 
            className="w-6 h-6 absolute transition-all duration-500"
            style={{
              opacity: mobileMenuOpen ? 0 : 1,
              transform: mobileMenuOpen ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
              pointerEvents: mobileMenuOpen ? 'none' : 'auto'
            }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
          {/* X Icon */}
          <svg 
            className="w-6 h-6 absolute transition-all duration-500"
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
              pointerEvents: mobileMenuOpen ? 'auto' : 'none'
            }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </button>

      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className={`${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:relative w-72 h-full bg-emerald-900 z-40 transition-transform duration-300 ease-in-out pt-16 md:pt-0 shadow-xl md:shadow-none`}>
        <ProjectSidebar 
          onStartAddProject={handleStartAddProject} 
          projects={projectState.projects} 
          onSelectProject={(projectId) => {
            handleSelectProject(projectId);
            setMobileMenuOpen(false);
          }}
          selectedProjectId={projectState.selectedProjectId}
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 bg-stone-50 w-full pt-20 md:pt-8">
        {content}
      </div>
    </main>
  );
}

export default App;
