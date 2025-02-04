
import py from '../assets/python-logo.png'
import aws from '../assets/aws-logo.png'
import tf from '../assets/terraform.png'
import react from '../assets/react-logo.png'
import linux from '../assets/linux-logo.png'

export default function Projects() {
  return (
    <div className="page-container">


      <h1 className='page-title'>My Projects</h1>


      <div class="projects-container">
        {/* <!-- Project 1: Customer Support Tool --> */}
        <div class="project">
          <h3>Customer Support Tool at Siemens Energy – Front End</h3>
          <p><strong>Location:</strong> Sweden, Finspång</p>
          <p>
            As the front-end developer, I built the Customer Support Tool for Siemens Energy, now in production and actively used by internal customers. Using <strong>React.js</strong> as the primary framework, I integrated back-end logic with the UI to ensure seamless functionality. The project followed a <strong>Scrum framework</strong>, involving close team collaboration to deliver features in iterative sprints and maintain steady progress toward project goals.
          </p>
          <section className='tools'>
            <img className='logo-tools' src={react} />
          </section>
        </div>

        {/* <!-- Project 2: Economy Master Data (EMD) --> */}
        <div class="project">
          <h3>Data Pipeline at Siemens Energy – ELT – Back End</h3>
          <p><strong>Location:</strong> Sweden, Finspång</p>
          <p>
            As a backend engineer, I developed a <strong>Python-based ELT pipeline</strong>, leveraging <strong>pandas</strong> for data transformation and loading into <strong>Snowflake</strong>. I contributed to API selection and data modeling in the project's early stages and implemented automated workflows using <strong>AWS Glue</strong> to streamline data processing. This Solution Architecture supports the SAM (Serverless Application Model). 
          </p>
          <section className='tools'>
            <img className='logo-tools' src={py} />
            <img className='logo-tools' src={aws} />
          </section>
        </div>

        {/* <!-- Project 3: FlexiCharge --> */}
      <div class="project">
          <h3>School-Project: FlexiCharge – Infrastructure – Back End</h3>
          <p><strong>Location:</strong> Sweden, Jönköping</p>
          <p>
            I developed and configured the <strong>AWS Cloud Infrastructure</strong> for Knowit’s FlexiCharge project, which supports real-time vehicle charging operations. Using <strong>Infrastructure as Code (IaC)</strong> with <strong>Terraform</strong>, I ensured that all necessary resources were provisioned and securely connected, with a safe and efficient networking setup to support seamless functionality.
          </p>
          <section className='tools'>
            <img className='logo-tools' src={tf} />
            <img className='logo-tools' src={aws} />
            <img className='logo-tools' src={linux} />

          </section>
        </div>
        
      </div>

      

    </div>
  );
}