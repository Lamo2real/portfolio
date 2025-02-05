import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import './App.css';
import './pages/styles/Contact.css'
import './pages/styles/Education.css'
import './pages/styles/Projects.css'
import './pages/styles/Home.css'

import github from './assets/github-logo.png'
import linkedin from './assets/linkedin.png'
import mail from './assets/mail-logo.png'
// import tobi from './assets/tobi.png'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
      <div>
        <div className="footer-div">


        <div className="footer-content">
          <p>©{new Date().getFullYear()} Ali Kouravand</p>
          <div className="social-links">
            <div className="social-link">
              <a className="social-media-links" href="https://github.com/Lamo2real" target="_blank" rel="noopener noreferrer">
                <img className="footer-logos" src={github} />GitHub
              </a>
            </div>
            <div className="social-link">
              <a id="linkedin-text" className="social-media-links" href="https://www.linkedin.com/in/ali-kouravand-a77937267/" target="_blank" rel="noopener noreferrer">
                <img className="footer-logos" id="linkedin-logo" src={linkedin} />LinkedIn
              </a>
            </div>
            <div className="social-link">
              <a className="social-media-links" href="https://mail.google.com/mail/?view=cm&fs=1&to=lamochi02@gmail.com">
                <img className="footer-logos" src={mail} />Email
              </a>
            </div>
          </div>
        </div>

        {/* <img src={tobi} width="60"/> */}

      </div>
      </div>

    </Router>
  );
}

export default App;