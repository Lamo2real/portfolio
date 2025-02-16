import py from '../assets/python-logo.png';
import aws from '../assets/aws-logo.png';
import tf from '../assets/terraform.png';
import react from '../assets/react-logo.png';
import linux from '../assets/linux-logo.png';
import '../pages/styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Customer Support Tool at Siemens Energy – Front End",
      location: "Sweden, Finspång",
      description: "Developed a Customer Support Tool for Siemens Energy using React.js for a seamless front-end experience. The project followed a Scrum framework for iterative development.",
      tools: [react]
    },
    {
      title: "Data Pipeline at Siemens Energy – ELT – Back End",
      location: "Sweden, Finspång",
      description: "Built a Python-based ELT pipeline leveraging pandas and Snowflake. Implemented automation using AWS Glue to optimize data processing.",
      tools: [py, aws]
    },
    {
      title: "School-Project: FlexiCharge – Infrastructure – Back End",
      location: "Sweden, Jönköping",
      description: "Configured AWS Cloud Infrastructure for real-time vehicle charging operations using Terraform.",
      tools: [tf, aws, linux]
    }
  ];

  return (
    <div className="projects-section">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p><strong>Location:</strong> {project.location}</p>
              <p>{project.description}</p>
            </div>
            <div className="project-tools">
              {project.tools.map((tool, idx) => (
                <img key={idx} className="tool-icon" src={tool} alt="Technology Logo" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
