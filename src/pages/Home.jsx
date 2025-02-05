
import lamo_at_desc from '../assets/lamo-at-desc.jpg'
// import tobi from '../assets/tobi.png'
// import lambda from '../assets/lambda-logo.png'
import alpha from '../assets/alpha.png'
import analytics from '../assets/analytics.png'
import coffee from '../assets/coffee-logo.png'

export default function Home() {
  return (
    <div className="page-container">
      <div id="hello">
        <h1 className='page-title'>Hello!/こんにちは!</h1>
        hope your are doing well
      </div>

      <section className="all-front-page-info">

        <section id="upper">
          <h3 className="front-page-info">
            
            <div className="personal-info-desc">
              My name is Ali Kouravand (also called Lámo) and I am a Data Engineer on a mission to become a Solutions Architect.
              I design and build scalable data systems that transform raw data into actionable insights,
              empowering businesses to make smarter decisions.
            </div>
            <img src={analytics} width="90" id='analytics-logo'/>
          </h3>
          <img id='lamo-at-desc' src={lamo_at_desc}/>
        </section>
        
        <section id="middle">
          <h3 className="front-page-info">
          
            <div className="personal-info-desc">
              Outside of work, I recharge with freshly brewed coffee, enjoy the tranquility of fishing,
              and push my limits through hypertrophy training and Jiu-Jitsu.
              These passions keep me disciplined, focused, and ready to tackle any challenge.
            </div>
            <img src={coffee} width="90" />
          </h3>
        </section>

        <section id="lower">
          <h3 className="front-page-info">
            
            <div className="personal-info-desc">
              Explore my portfolio to see how I combine technical expertise, creativity, and problem-solving
              to deliver impactful solutions. Let’s connect and build something extraordinary together!
            </div>
            <img src={alpha} width="80" />
          </h3>
        </section>

      </section>
    </div>
  );
}