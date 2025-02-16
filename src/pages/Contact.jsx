import './styles/Contact.css';

export default function Contact() {
  const contacts = [
    {
      icon: "✉️",
      title: "Email",
      link: "mailto:lamochi02@gmail.com",
      text: "lamochi02@gmail.com"
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ali-kouravand-a77937267/",
      text: "linkedin.com/AliKouravand"
    },
    {
      icon: "📞",
      title: "Phone",
      link: "tel:+46723001573",
      text: "+46 (072) 300-1573"
    },
    {
      icon: "📍",
      title: "Location",
      link: "https://www.google.com/maps/place/Finsp%C3%A5ng/",
      text: "Finspång, Sweden"
    }
  ];

  return (
    <div className="contact-section">
      <h1 className="contact-title">Contact Information</h1>

      <div className="contact-container">
        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>
            <h3>
              <span className="contact-icon">{contact.icon}</span> {contact.title}
            </h3>
            <a href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-link">
              {contact.text}
            </a>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <a href="/resume.pdf" className="download-button" download="Ali_Kouravand_Resume.pdf">
          Download Resume
        </a>
      </div>
    </div>
  );
}
