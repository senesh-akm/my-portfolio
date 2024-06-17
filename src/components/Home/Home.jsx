import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home text-center d-flex align-items-center justify-content-center">
      <div>
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">Hi, I'm Your Name. I'm a [Your Profession].</p>
      </div>
    </section>
  );
}

export default Home;
