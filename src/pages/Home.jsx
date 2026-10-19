import "./Home.css";

function Home() {
  const stats = [
    { number: "500+", label: "Happy Members" },
    { number: "15+", label: "Expert Trainers" },
    { number: "20+", label: "Fitness Programs" },
  ];

  return (
    <main>
      {" "}
      <section className="home" id="home">
        {" "}
        <div className="home-content">
          {" "}
          <p className="home-tagline">PUSH YOUR LIMITS</p>
          <h1>
            BUILD YOUR
            <br />
            <span>BEST VERSION</span>
          </h1>
          <p className="home-description">
            Train harder. Become stronger. Stay disciplined. Start your fitness
            journey with AADUKALAM FITNESS CLUB.
          </p>
          <div className="home-buttons">
            <a href="/membership" className="home-btn primary-btn">
              START YOUR FITNESS JOURNEY
            </a>

            <a href="#programs" className="home-btn secondary-btn">
              EXPLORE PROGRAMS
            </a>
          </div>
          <div className="home-stats">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <h2>{stat.number}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="home-image">
          <img src="/images/gym.png" alt="AADUKALAM Fitness Club Gym" />

          <div className="image-label">
            <span className="red-dot"></span>
            NO EXCUSES. JUST RESULTS.
          </div>

          <div className="image-decoration"></div>
        </div>
      </section>
    </main>
  );
}

export default Home;
