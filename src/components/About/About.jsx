import React from 'react';
import './About.css';
import aboutImage from './images/about-me.jpg';
import Resume from './document/Resume_Senesh.pdf';

function About() {
  return (
    <section id="about" className="about container align-justify py-5">
      <div className="container">
        <div className="col-md-4">
          <img src={aboutImage} alt="About Me" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2 className="heading">About Me</h2>
          <p className="content">I am Ranusha Senesh, commonly known as Senesh. I am a software engineering graduate from London Metropolitan University. With a strong foundation in computer science and software development, I have honed my skills in various programming languages and technologies. Known for my problem-solving abilities and innovative thinking, I am passionate about creating efficient and effective software solutions. My education and practical experience have equipped me with the knowledge and expertise needed to excel in the dynamic field of software engineering. I am eager to leverage my skills in a professional setting, contributing to the advancement of technology and the success of my future team.</p>
          <a href={Resume} className="btn btn-primary" download>Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default About;
