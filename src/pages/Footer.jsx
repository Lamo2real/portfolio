import React from 'react';
import github from '../assets/github-logo.png';
import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail-logo.png';
import '../pages/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ali Kouravand</p>
      <div className="social-links">
        {[
          { href: "https://github.com/Lamo2real", img: github, alt: "GitHub", text: "GitHub" },
          { href: "https://www.linkedin.com/in/ali-kouravand-a77937267/", img: linkedin, alt: "LinkedIn", text: "LinkedIn" },
          { href: "mailto:lamochi02@gmail.com", img: mail, alt: "Email", text: "Email" }
        ].map((item, index) => (
          <a key={index} className="social-media-link" href={item.href} target="_blank" rel="noopener noreferrer">
            <img className="footer-logo" src={item.img} alt={item.alt} /> {item.text}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
