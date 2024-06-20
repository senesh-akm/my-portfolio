import React from 'react';
import './About.css';
import aboutImage from './images/about-me.jpg';
import Resume from './document/Resume_Senesh.pdf';

function About() {
  return (
    <section id="about" className="about align-justify py-5">
      <div className="container">
        <div className="card custom-card">
          <div className="card-body p-5">
            <div className="row">
              <div className="col-md-4">
                <img src={aboutImage} alt="About Me" className="img-fluid about-image" />
              </div>
              <div className="col-md-8 justify-content-between">
                <h2>About Me</h2>
                <p className="content">I am Ranusha Senesh Akmeemana, commonly known as Senesh. I am a software engineering graduate from London Metropolitan University. With a strong foundation in computer science and software development, I have honed my skills in various programming languages and technologies. Known for my problem-solving abilities and innovative thinking, I am passionate about creating efficient and effective software solutions. My education and practical experience have equipped me with the knowledge and expertise needed to excel in the dynamic field of software engineering. I am eager to leverage my skills in a professional setting, contributing to the advancement of technology and the success of my future team.</p>
                <a href={Resume} className="btn btn-primary" download>Download CV</a>

                <h4 className="mt-5 mb-3">Programming Skills</h4>
                <div className="row">
                  <div className="col-md-6">
                    <h6>HTML/CSS</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>
                    <h6>JavaScript</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                    <h6>PHP</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                    <h6>Java</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                    </div>
                    <h6>C#</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '69%' }} aria-valuenow="69" aria-valuemin="0" aria-valuemax="100">69%</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h6>React</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                    <h6>Laravel</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '78%' }} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">78%</div>
                    </div>
                    <h6>ASP.NET</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                    </div>
                    <h6>GitHub</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
