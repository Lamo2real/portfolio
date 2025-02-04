export default function Home() {
  return (
    <div className="page-container">
      <div id="hello">
        <h1 className='page-title'>Welcome to My Portfolio</h1>
        <h2>Hello!/こんにちは!</h2>
      </div>

      <section className="all-front-page-info">

        <section id="upper">
          <h3 className="front-page-info">
            <div className="personal-info-desc">
              I'm a Data Engineer on a mission to become a Solutions Architect.
              I design and build scalable data systems that transform raw data into actionable insights,
              empowering businesses to make smarter decisions.
            </div>
          </h3>
        </section>

        <section id="middle">
          <h3 className="front-page-info">
            <div className="personal-info-desc">
              Outside of work, I recharge with freshly brewed coffee, enjoy the tranquility of fishing,
              and push my limits through hypertrophy training and Jiu-Jitsu.
              These passions keep me disciplined, focused, and ready to tackle any challenge.
            </div>
          </h3>
        </section>

        <section id="lower">
          <h3 className="front-page-info">
            <div className="personal-info-desc">
              Explore my portfolio to see how I combine technical expertise, creativity, and problem-solving
              to deliver impactful solutions. Let’s connect and build something extraordinary together!
            </div>
          </h3>
        </section>

      </section>
    </div>
  );
}