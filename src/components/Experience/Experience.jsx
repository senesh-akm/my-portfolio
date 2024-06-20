import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience py-5">
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card custom-card">
                    <div className="card-body p-5">
                        <h2>Experience</h2>
                        <div className="experience-item">
                            <h3 className="experience-title">Trainee Developer at MISL Holdings (Pvt) Ltd.</h3>
                            <p className="experience-duration">Aug 2023 - Jun 2024</p>
                            <p className="experience-description">
                                - Developed and maintained web applications using React and Laravel.<br/>
                                - Implemented responsive designs to ensure apps work seamlessly on different devices.<br/>
                                - Install and configure printer server for Raspberry Pi and Orange Pi Ubuntu devices.<br/>
                                - Creating project proposals and introductory videos for new software projects.<br/>
                                - Creating user interfaces for new web and mobile software products.<br/>
                                - Wrote unit and integration tests to ensure code quality and reliability.
                            </p>
                        </div>
                        <div className="experience-item">
                            <h3 className="experience-title">Intern Software Engineer at Ambrum Solutions (Pvt) Ltd.</h3>
                            <p className="experience-duration">Nov 2022 - Feb 2023</p>
                            <p className="experience-description">
                                - Assisted in the development of client-side applications using JavaScript and Bootstrap.<br/>
                                - Worked closely with UI/UX designers and other developers to implement user-friendly interfaces.<br/>
                                - Improving knowledge focusing on development processes and new technologies.<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card custom-card">
                    <div className="card-body p-5">
                        <h2>Education</h2>
                        <div className="education-item">
                            <h3 className="education-title">BEng (Hons) in Software Engineering</h3>
                            <p className="education-duration">London Metropolitan University, 2019 - 2020</p>
                            <p className="education-description">
                                - Graduated with Lower Second Class Honors.<br/>
                                - Completed coursework in advanced algorithms, data structures, software development, and project management.<br/>
                                - Developed a final project focused on creating a real-time collaborative coding platform.<br/>
                                - Participate in coding and quality assurance of team projects.
                            </p>
                        </div>
                        <div className="education-item">
                            <h3 className="education-title">Higher National Diploma in Computing and System Development</h3>
                            <p className="education-duration">ESOFT Metro Campus, 2017 - 2019</p>
                            <p className="education-description">
                                - Undergraduated with Distinction.<br/>
                                - Studied foundational courses in programming, database management, and software development.<br/>
                                - Worked on various projects involving the development of small-scale applications.<br/>
                                - Engaged in extracurricular activities related to technology and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
