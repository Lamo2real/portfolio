import saa from '../assets/saa_certificate.png';
import clf from '../assets/cloud_practitioner.png';
import cpp from '../assets/cpp-logo.png';
import py from '../assets/python-logo.png';
import swift from '../assets/swift-logo.png';
import android from '../assets/android-logo.png';
import aws from '../assets/aws-logo.png';
import '../pages/styles/Education.css';

export default function Education() {
  const education = {
    title: "Software Engineering at Jönköping University",
    description: "During my studies, I built a strong foundation in software engineering with courses in:",
    courses: [
      "Data Structures & Algorithms (C++)",
      "Object-Oriented Programming (C++)",
      "Mobile App Development (Swift & Kotlin)",
      "Network Programming (Python)",
      "Database Systems (SQL, Data Modeling)",
      "DevOps & CI/CD with GitHub Actions"
    ],
    projectTitle: "Capstone Project: FlexiCharge",
    projectDescription:
      "Collaborated on FlexiCharge, a project with Knowit, involving 80 students across multiple teams. My role as Solutions Architect included designing and implementing AWS cloud infrastructure.",
    tools: [cpp, py, swift, android, aws]
  };

  const certifications = [
    {
      title: "Cloud Practitioner - (CLF-C02)",
      validation: "d3ddb8af11cc410eb1f52c234406731d",
      image: clf
    },
    {
      title: "Solutions Architect Associate - (SAA-C03)",
      validation: "4a5b9927dec6436abdeab7ea8634b7d7",
      image: saa
    }
  ];

  return (
    <div className="education-section">
      <h1 className="education-title">Education</h1>

      {/* Education Section */}
      <div className="education-card">
        <h2>{education.title}</h2>
        <p className="education-desc">{education.description}</p>
        <ul className="education-list">
          {education.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>

        {/* Tools */}
        <div className="education-tools">
          {education.tools.map((tool, index) => (
            <img key={index} className="tool-icon" src={tool} alt="Tech Logo" />
          ))}
        </div>

        {/* Capstone Project */}
        <h3>{education.projectTitle}</h3>
        <p className="education-desc">{education.projectDescription}</p>
      </div>

      {/* Certifications Section */}
      <h1 className="certifications-title">AWS Certifications</h1>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <img className="certificate-image" src={cert.image} alt={cert.title} />
            <div className="cert-content">
              <h4>{cert.title}</h4>
              <p>Validation Number: {cert.validation}</p>
              <button
                className="copy-button"
                onClick={() => navigator.clipboard.writeText(cert.validation)}
              >
                Copy Code
              </button>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://cp.certmetrics.com/amazon/en/public/verify/credential"
        target="_blank"
        rel="noopener noreferrer"
        className="verify-button"
      >
        Verify Certifications
      </a>
    </div>
  );
}
