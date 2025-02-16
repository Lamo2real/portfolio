import saa from '../assets/saa_certificate.png';
import clf from '../assets/cloud_practitioner.png';
import cpp from '../assets/cpp-logo.png';
import py from '../assets/python-logo.png';
import swift from '../assets/swift-logo.png';
import android from '../assets/android-logo.png';
import aws from '../assets/aws-logo.png';
import '..//pages/styles/Education.css';

export default function Education() {
  return (
    <div className="education-container">
      <h1 className='page-title'>Education</h1>

      <section className="education-section">
        <div className="education-item">
          <h2>Software Engineering at Jönköping University</h2>
          <p className='education-desc'>
            During my studies, I built a strong foundation in software engineering with courses in:
          </p>
          <ul className='education-list'>
            <li>Data Structures & Algorithms (C++)</li>
            <li>Object-Oriented Programming (C++)</li>
            <li>Mobile App Development (Swift & Kotlin)</li>
            <li>Network Programming (Python)</li>
            <li>Database Systems (SQL, Data Modeling)</li>
            <li>DevOps & CI/CD with GitHub Actions</li>
          </ul>
          <div className='logo-container'>
            <img className='logos' src={cpp} alt='C++' />
            <img className='logos' src={py} alt='Python' />
            <img className='logos' src={swift} alt='Swift' />
            <img className='logos' src={android} alt='Android' />
            <img className='logos' src={aws} alt='AWS' />
          </div>
          <h3>Capstone Project: FlexiCharge</h3>
          <p className='education-desc'>
            Collaborated on FlexiCharge, a project with Knowit, involving 80 students across multiple teams.
            My role as Solutions Architect included designing and implementing AWS cloud infrastructure.
          </p>
        </div>
      </section>

      <section className="certifications-section">
        <h1>AWS Certifications</h1>
        <div className="certification-container">
          <div className="certification">
            <img className='certificate-image' src={clf} alt='AWS Cloud Practitioner' />
            <div>
              <h4>Cloud Practitioner - (CLF-C02)</h4>
              <p>Validation Number: d3ddb8af11cc410eb1f52c234406731d</p>
              <button
                className="copy-button"
                onClick={() => navigator.clipboard.writeText('d3ddb8af11cc410eb1f52c234406731d')}
              >
                Copy Code
              </button>
            </div>
          </div>

          <div className="certification">
            <img className='certificate-image' src={saa} alt='AWS Solutions Architect' />
            <div>
              <h4>Solutions Architect Associate - (SAA-C03)</h4>
              <p>Validation Number: 4a5b9927dec6436abdeab7ea8634b7d7</p>
              <button
                className="copy-button"
                onClick={() => navigator.clipboard.writeText('4a5b9927dec6436abdeab7ea8634b7d7')}
              >
                Copy Code
              </button>
            </div>
          </div>
        </div>
        <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential" target="_blank" rel="noopener noreferrer" className="verify-button">
          Verify Certifications
        </a>
      </section>
    </div>
  );
}
