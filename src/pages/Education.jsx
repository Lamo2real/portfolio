
import saa from '../assets/saa_certificate.png'
import clf from '../assets/cloud_practitioner.png'
import cpp from '../assets/cpp-logo.png'
import py from '../assets/python-logo.png'
import swift from '../assets/swift-logo.png'
import android from '../assets/android-logo.png'
import aws from '../assets/aws-logo.png'

export default function Education() {
  return (
    <>
      <section id='edu-cert'>
        <h1 className='page-title'>Education</h1>
        <h1>AWS Certifications</h1>
      </section>


      <div className="aws-section">

        <div className="aws-inner-section">
          <div className="education-item">
            <h2>Software Engineering at University of Engineering</h2>
            <h2>Jönköping University</h2>
            <div id='school-desc-font'>
              <p >
                During my studies at Jönköping University, I gained a strong foundation in software engineering through a comprehensive curriculum that included:
                <section id='school-subject-section'>
                  <ul >
                    <li className='school-subject'>Data Structures & Algorithms (C++)</li>
                    <li className='school-subject'>Object-Oriented Programming (C++)</li>
                    <li className='school-subject'>Mobile Application Development (Swift for iOS and <br />Kotlin for Android).
                      I Built a weather app and a <br />macro-tracking application using Swift <br />
                      and a weather app and a macro-tracking application using Swift.</li>
                    <li className='school-subject'>Developed a Tic-Tac-Toe game using Kotlin for Android.</li>
                    <li className='school-subject'>Network Programming (Python)</li>
                    <li className='school-subject'>Database Systems (MSSQL, Data Modeling, and SQL Databases)</li>
                    <li className='school-subject'>DevOps Practices/Automated CI/CD pipelines using GitHub Actions.</li>

                  </ul>
                  <section className='logo-container'>
                  <img className='logos' src={cpp} />
                  <img className='logos' src={py} />
                  <img className='logos' src={swift} />
                  <img className='logos' src={android} />
                  <img className='logos' src={aws} />
                  </section>

                </section>
                Capstone Project: FlexiCharge
                As part of a large-scale team project, I contributed to FlexiCharge, a solution designed to locate available charging stations for electric vehicles.
                This project was conducted in collaboration with Knowit, a leading Swedish IT consultancy.
                Team Structure: <br />
                The project involved 80 students divided into specialized teams, including Android, iOS, Cross-Platform, Web Development, Database, OCPP (Open Charge Point Protocol), Business Orchestrator, Charging System (hardware deployment), HTTP Communication, and AWS.
                My Role: I served as the Solutions Architect, responsible for designing and implementing the cloud infrastructure on AWS.
                Designed the solution architecture based on business requirements and KPIs.
                Leveraged Terraform for infrastructure-as-code to automate deployments.
                Built a secure and scalable cloud environment, including:
                Internet Gateway with appropriate security groups, subnets, NACLs, and route tables.
                Amazon RDS for MySQL to manage the database layer.
                Amazon S3 for hosting static website content.
                Ensured operational excellence, adhering to the AWS Well-Architected Framework.
                Collaborated with the HTTP Communication team to facilitate seamless integration between all sub-teams.
                This experience not only honed my technical skills but also strengthened my ability to lead cross-functional teams, manage complex projects, and deliver scalable solutions in a collaborative environment.
              </p>
            </div>

          </div>
        </div>

        <div className="aws-inner-section">

          <div className="aws-inner-item">

            <div className="certification">
              <img
                src={clf}
                alt="cloud practitioner Certificate"

              />
              <div><h4 className='crt-desc'>Cloud Practitioner - (CLF-C02)</h4>
                <p>Validation Number:</p>
                <div className="code-block">
                  <div className="code-content">
                    d3ddb8af11cc410eb1f52c234406731d
                    <button
                      className="copy-button"
                      onClick={() => navigator.clipboard.writeText('d3ddb8af11cc410eb1f52c234406731d')}
                    >
                      Copy Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="aws-inner-item">

            <div className="certification">


              <img
                src={saa}
                alt="AWS Solutions Architect Associate Certificate"

              />

              <div>
                <h4 className='crt-desc'>Solutions Architect Associate - (SAA-C03)</h4>
                <p>Validation Number:</p>
                <div className="code-block">
                  <div className="code-content">
                    4a5b9927dec6436abdeab7ea8634b7d7
                    <button
                      className="copy-button"
                      onClick={() => navigator.clipboard.writeText('4a5b9927dec6436abdeab7ea8634b7d7')}
                    >
                      Copy Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential"
            target="_blank"
            rel="noopener noreferrer"
            class="button">
            Click here!
          </a>
          <p id='verify-code-desc'>Copy the Validation Number and verify by clicking the button</p>

        </div>
      </div>
    </>
  );
}