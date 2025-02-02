import './styles/Contact.css'; // Import the updated CSS

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <div className="contact-item">
          <span className="icon">✉️</span>
          <div>
            <h3>Email</h3>
            <p>your.email@example.com</p>
          </div>
        </div>

        <div className="contact-item">
          <span className="icon">🔗</span>
          <div>
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/your-profile
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span className="icon">📞</span>
          <div>
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>

        <div className="contact-item">
          <span className="icon">📍</span>
          <div>
            <h3>Location</h3>
            <p>New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}