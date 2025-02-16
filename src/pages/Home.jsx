import alpha from '../assets/alpha.png';
import analytics from '../assets/analytics.png';
import coffee from '../assets/coffee-logo.png';
import '../pages/styles/Home.css';

export default function Home() {
  const sections = [
    {
      title: "About Me",
      text: "My name is Ali Kouravand (also called Lámo) and I am a Data Engineer on a mission to become a Solutions Architect. I design and build scalable data systems that transform raw data into actionable insights.",
      img: analytics,
      alt: "Analytics Logo",
    },
    {
      title: "Interests",
      text: "Outside of work, I recharge with freshly brewed coffee, enjoy the tranquility of fishing, and push my limits through hypertrophy training and Jiu-Jitsu.",
      img: coffee,
      alt: "Coffee Logo",
    },
    {
      title: "Portfolio",
      text: "Explore my portfolio to see how I combine technical expertise, creativity, and problem-solving to deliver impactful solutions. Let’s connect and build something extraordinary together!",
      img: alpha,
      alt: "Alpha Logo",
    },
  ];

  return (
    <div className="home-section">
      <div className="header">
        <h1>Welcome</h1>
        <p>to my portfolio</p>
      </div>
      
      <section className="home-content">
        {sections.map((section, index) => (
          <div className="home-card" key={index}>
            <div className="home-card-content">
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </div>
            <div className="home-card-image">
              <img src={section.img} alt={section.alt} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
