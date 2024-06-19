import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="social-icons">
        <a href="https://facebook.com/senesh.akmeemana.7" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://instagram.com/ranusha_senesh" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/senesh-akmeemana" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/senesh-akm" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <p className="mt-3">&copy; 2024 Senesh Akmeemana. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
