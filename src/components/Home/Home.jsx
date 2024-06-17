import React from 'react';
import './Home.css';
import profileImage from './images/profile.jpg';

function Home() {
  return (
    <section id="home" className="home text-center d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={profileImage} alt="Ranusha Senesh Akmeemana" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1 className="heading">Hi, I'm Ranusha Senesh Akmeemana</h1>
            <h3 className="lead">I'm a Software Developer</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
