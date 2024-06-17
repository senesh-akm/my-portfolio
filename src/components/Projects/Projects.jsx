import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects container py-5">
      <h2 className="text-center">My Projects</h2>
      <div className="row">
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Description of Project 1</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">Description of Project 2</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">Description of Project 3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
