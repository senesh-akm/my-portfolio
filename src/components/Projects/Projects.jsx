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
              <h5 className="card-title">Employee Payroll System</h5>
              <p className="card-text">The "Employee Payroll System" is vital for any organization, managing salary payments, check entries, and monthly calculations. Employees use an ID number for all functions. The system operates offline but can update data online. It includes forms for monthly salary details and backup data for reliability.</p>
              <p className="card-text"><span className="completed">Completed</span></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Vehicle Car Parking System</h5>
              <p className="card-text">Sri Lanka faces significant parking issues, especially in tourist areas. A project was developed over six months to create an efficient car park management system. The system includes three user areas: two for system users and one for the administrator. It tracks vehicle data, customer information, and fees.</p>
              <p className="card-text"><span className="completed">Completed</span></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Automotive Dealer Mate</h5>
              <p className="card-text">The Inventory Management System offers centralized control, vehicle listings, customer interaction tools, user management, marketing features, reporting and analytics, finance options, customer reviews, notifications, content management, system integrations, and robust security measures. It enhances efficiency, customer engagement, and online visibility for vehicle dealerships.</p>
              <p className="card-text"><span className="about-begin">Is About to Begin</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
