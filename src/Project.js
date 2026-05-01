import React, { useState } from 'react';
import './Project.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectList = [1, 2, 3, 4, 5, 6]; 

  return (

    
    <section id="skill" className="projects-section">
      <div className={`projects-grid ${selectedProject ? 'blur-bg' : ''}`}>
        {projectList.map((project) => (
          <div key={project} className="project-card" onClick={() => setSelectedProject(project)}>
            <div className="window-header">
              <div className="window-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              
            </div>
            <div className="window-content">
              <div className="placeholder-content">Project {project}</div>
            </div>
            <div className="window-footer"><div className="footer-bar"></div></div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="window-header">
              <div className="window-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              {/* THE X BUTTON MOVED TO THE TOP RIGHT */}
              <button className="modal-close-x" onClick={() => setSelectedProject(null)}>×</button>
            </div>
            <div className="window-content zoomed-content">
               <h1>PROJECT {selectedProject}</h1>
            </div>
            <div className="window-footer">
               <div className="footer-bar"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;