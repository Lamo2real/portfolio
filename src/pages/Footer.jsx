import React from 'react';
import github from '../assets/github-logo.png';
import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail-logo.png';
import '../pages/styles/Footer.css';
const Footer = () => {
    return (
       
        <footer className="footer">
          <p>©{new Date().getFullYear()} Ali Kouravand</p>
          <div className="social-links">
            <a className="social-media-link" href="https://github.com/Lamo2real" target="_blank" rel="noopener noreferrer">
              <img className="footer-logo" src={github} alt="GitHub" /> GitHub
            </a>
            <a className="social-media-link" href="https://www.linkedin.com/in/ali-kouravand-a77937267/" target="_blank" rel="noopener noreferrer">
              <img className="footer-logo" src={linkedin} alt="LinkedIn" /> LinkedIn
            </a>
            <a className="social-media-link" href="mailto:lamochi02@gmail.com">
              <img className="footer-logo" src={mail} alt="Email" /> Email
            </a>
          </div>
        </footer>
    );
};

export default Footer;