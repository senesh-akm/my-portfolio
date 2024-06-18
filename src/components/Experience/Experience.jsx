import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience py-5">
      <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2 className="heading">Experience</h2>
                <div className="experience-item">
                    <h3 className="experience-title">Software Developer at XYZ Company</h3>
                    <p className="experience-duration">Jan 2020 - Present</p>
                    <p className="experience-description">
                        - Developed and maintained web applications using React, Redux, and Node.js.<br/>
                        - Collaborated with cross-functional teams to define, design, and ship new features.<br/>
                        - Implemented responsive design principles to ensure applications worked seamlessly on various devices.<br/>
                        - Participated in code reviews and provided constructive feedback to peers.<br/>
                        - Wrote unit and integration tests to ensure code quality and reliability.
                    </p>
                </div>
                <div className="experience-item">
                    <h3 className="experience-title">Junior Developer at ABC Solutions</h3>
                    <p className="experience-duration">Jul 2018 - Dec 2019</p>
                    <p className="experience-description">
                        - Assisted in the development of client-side applications using JavaScript and Angular.<br/>
                        - Worked closely with designers to implement user-friendly interfaces.<br/>
                        - Debugged and resolved issues in existing applications.<br/>
                        - Contributed to the improvement of development processes and best practices.<br/>
                        - Documented technical specifications and user guides.
                    </p>
                </div>
            </div>
            <div className="col-md-6">
                <h2 className="heading">Education</h2>
                <div className="education-item">
                    <h3 className="education-title">BSc in Software Engineering</h3>
                    <p className="education-duration">London Metropolitan University, 2015 - 2018</p>
                    <p className="education-description">
                        - Graduated with First Class Honors.<br/>
                        - Completed coursework in advanced algorithms, data structures, software development, and project management.<br/>
                        - Developed a capstone project focused on creating a real-time collaborative coding platform.<br/>
                        - Actively participated in coding competitions and hackathons.
                    </p>
                </div>
                <div className="education-item">
                    <h3 className="education-title">Diploma in Information Technology</h3>
                    <p className="education-duration">ABC Institute, 2013 - 2015</p>
                    <p className="education-description">
                        - Graduated with Distinction.<br/>
                        - Studied foundational courses in programming, database management, and web development.<br/>
                        - Worked on various projects involving the development of small-scale applications.<br/>
                        - Engaged in extracurricular activities related to technology and innovation.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
