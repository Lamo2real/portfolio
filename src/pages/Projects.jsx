import py from '../assets/python-logo.png';
import aws from '../assets/aws-logo.png';
import tf from '../assets/terraform.png';
import react from '../assets/react-logo.png';
import linux from '../assets/linux-logo.png';
import '../pages/styles/Projects.css';

export default function Projects() {
  return (
    <div className="page-container">
      <h1 className='page-title'>My Projects</h1>

      <div className="projects-container">
        {/** Project 1 */}
        <div className="project">
          <h3>Customer Support Tool at Siemens Energy – Front End</h3>
          <p><strong>Location:</strong> Sweden, Finspång</p>
          <p>
            Developed a Customer Support Tool for Siemens Energy using <strong>React.js</strong> for a seamless front-end experience. 
            The project followed a <strong>Scrum framework</strong> for iterative development.
          </p>
          <section className='tools'>
            <img className='logo-tools' src={react} alt='React.js Logo'/>
          </section>
        </div>

        {/** Project 2 */}
        <div className="project">
          <h3>Data Pipeline at Siemens Energy – ELT – Back End</h3>
          <p><strong>Location:</strong> Sweden, Finspång</p>
          <p>
            Built a <strong>Python-based ELT pipeline</strong> leveraging <strong>pandas</strong> and <strong>Snowflake</strong>. 
            Implemented automation using <strong>AWS Glue</strong> to optimize data processing.
          </p>
          <section className='tools'>
            <img className='logo-tools' src={py} alt='Python Logo'/>
            <img className='logo-tools' src={aws} alt='AWS Logo'/>
          </section>
        </div>

        {/** Project 3 */}
        <div className="project">
          <h3>School-Project: FlexiCharge – Infrastructure – Back End</h3>
          <p><strong>Location:</strong> Sweden, Jönköping</p>
          <p>
            Configured <strong>AWS Cloud Infrastructure</strong> for real-time vehicle charging operations using <strong>Terraform</strong>.
          </p>
          <section className='tools'>
            <img className='logo-tools' src={tf} alt='Terraform Logo'/>
            <img className='logo-tools' src={aws} alt='AWS Logo'/>
            <img className='logo-tools' src={linux} alt='Linux Logo'/>
          </section>
        </div>
      </div>
    </div>
  );
}
