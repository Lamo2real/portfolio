import alpha from '../assets/alpha.png';
import analytics from '../assets/analytics.png';
import coffee from '../assets/coffee-logo.png';
import '../pages/styles/Home.css'

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>Welcome</h1>
        <p>to my portfolio</p>
      </div>
      
      <section className="content">
        <div className="card">
          <h3>About Me</h3>
          <p>
            My name is Ali Kouravand (also called Lámo) and I am a Data Engineer on a mission to become a Solutions Architect.
            I design and build scalable data systems that transform raw data into actionable insights.
          </p>
          <img src={analytics} alt="Analytics Logo" />
        </div>

        <div className="card">
          <h3>Interests</h3>
          <p>
            Outside of work, I recharge with freshly brewed coffee, enjoy the tranquility of fishing,
            and push my limits through hypertrophy training and Jiu-Jitsu.
          </p>
          <img src={coffee} alt="Coffee Logo" />
        </div>

        <div className="card">
          <h3>Portfolio</h3>
          <p>
            Explore my portfolio to see how I combine technical expertise, creativity, and problem-solving
            to deliver impactful solutions. Let’s connect and build something extraordinary together!
          </p>
          <img src={alpha} alt="Alpha Logo" />
        </div>
      </section>
    </div>
  );
}
