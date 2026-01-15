import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { PROJECTS } from '../../lib/data';

const ProjectGrid = () => {
  // State to track which project is clicked
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    // FIX: Used "mt-20" and removed "py-20" + headers to maintain layout consistency
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 mt-20 relative">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            // PASS THE FUNCTION: Click sets the project
            onOpenDetails={() => setSelectedProject(project)} 
          />
        ))}
      </div>

      {/* RENDER MODAL: Only if a project is selected */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </section>
  );
};

export default ProjectGrid;