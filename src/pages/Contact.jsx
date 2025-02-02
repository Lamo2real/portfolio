import { MdEmail } from 'react-icons/md';
import './styles/Contact.css'; // Import the updated CSS

export default function Contact() {
  return (

      <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <div className="contact-item">
         
          <div>
            <h3> <span className="icon">✉️</span> Email</h3>
            <a href='mailto:lamochi02@gmail.com' className='email-link'>lamochi02@gmail.com</a>
          </div>
        </div>

        <div className="contact-item">
          
          <div>
            <h3><span className="icon">🔗</span> LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/ali-kouravand-a77937267/"
              target="_blank"
              rel="noopener noreferrer"
              className='email-link'
            >
              linkedin.com/AliKouravand
            </a>
          </div>
        </div>

        <div className="contact-item">
          
          <div>
            <h3><span className="icon">📞</span> Phone</h3>
            <p>+46 (072) 300-1573</p>
          </div>
        </div>

        <div className="contact-item">
          
          <div>
            <h3><span className="icon">📍</span> Location</h3>
            <p>Finspång, Sweden</p>
          </div>
        </div>
      </div>
    </div>

  );
}