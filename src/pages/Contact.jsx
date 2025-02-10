import { MdEmail } from 'react-icons/md';
import './styles/Contact.css'; // Import the updated CSS

export default function Contact() {
  return (

    <div className="contact-container">
      <h1 className='page-title'>Contact Information</h1>
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
            <div className='contact-data'>Call me on: <a id='phone' href="tel:+46723001573">+46 (072) 300-1573</a></div>

          </div>
        </div>

        <div className="contact-item">

          <div>
            <h3><span className="icon">📍</span> Location</h3>
            <a href="https://www.google.com/maps/place/Finsp%C3%A5ng/@58.7047049,15.7393673,14z/data=!3m1!4b1!4m15!1m8!3m7!1s0x46594ffabfbaaab7:0x3aa165072176ec16!2sViggestorp-Nyhem-H%C3%B6gby,+Finsp%C3%A5ng!3b1!8m2!3d58.6996336!4d15.7569782!16s%2Fg%2F1tk6nyw3!3m5!1s0x46594fea76db936f:0xc36ce8c904a9854d!8m2!3d58.7074884!4d15.773595!16s%2Fm%2F02p3g3h?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <p className='contact-data'>Finspång, Sweden.</p></a>
            
          </div>
        </div>
      </div>
      <div className="download-section">
        <a 
          href="/resume.pdf" // Update this path to your actual resume file
          className="download-button"
          download="Ali_Kouravand_Resume.pdf"
        >
          Download Resume
        </a>
      </div>
    </div>

  );
}