import './styles/Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className='page-title'>Contact Information</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h3><span className="icon">✉️</span> Email</h3>
          <a href='mailto:lamochi02@gmail.com' className='contact-link'>lamochi02@gmail.com</a>
        </div>

        <div className="contact-item">
          <h3><span className="icon">🔗</span> LinkedIn</h3>
          <a href="https://www.linkedin.com/in/ali-kouravand-a77937267/" target="_blank" rel="noopener noreferrer" className='contact-link'>
            linkedin.com/AliKouravand
          </a>
        </div>

        <div className="contact-item">
          <h3><span className="icon">📞</span> Phone</h3>
          <a href="tel:+46723001573" className='contact-link'>+46 (072) 300-1573</a>
        </div>

        <div className="contact-item">
          <h3><span className="icon">📍</span> Location</h3>
          <a href="https://www.google.com/maps/place/Finsp%C3%A5ng/" target="_blank" rel="noopener noreferrer" className='contact-link'>
            Finspång, Sweden
          </a>
        </div>
      </div>
      
      <div className="download-section">
        <a href="/resume.pdf" className="download-button" download="Ali_Kouravand_Resume.pdf">
          Download Resume
        </a>
      </div>
    </div>
  );
}
