import React from 'react';
import './Home.css';
import profileImage from './images/profile.jpg';

function Home() {
  return (
    <section id="home" className="home text-center d-flex align-items-center justify-content-center">
      <div className="container text-center fade-in">
        <img src={profileImage} alt="Ranusha Senesh Akmeemana" className="profile-pic" />
        <h1 className="heading">Ranusha Senesh Akmeemana</h1>
        <h3 className="lead">Software Developer</h3>
      </div>
    </section>
  );
}

export default Home;
