
import ProjectSidebar from './components/projectSidebar';
import './App.css';
import NewProject from './components/NewProject';
import NoProject from './components/NoProject';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NoProject />
    </main>
  );
}

export default App;
