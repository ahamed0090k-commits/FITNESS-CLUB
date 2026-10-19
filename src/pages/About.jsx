import "./About.css";

function About() {
  const features = [
    {
      number: "01",
      title: "Expert Trainers",
      description:
        "Get professional guidance from experienced fitness trainers. Learn proper workout techniques, improve your performance, and develop a consistent exercise routine that supports your goals.",
    },
    {
      number: "02",
      title: "Modern Equipment",
      description:
        "Train with quality equipment designed for effective workouts. Our fitness environment supports strength training, cardiovascular exercise, muscle development, and overall physical fitness.",
    },
    {
      number: "03",
      title: "Personalized Plans",
      description:
        "Follow a fitness plan that matches your goals and fitness level. Whether you want to build muscle, improve endurance, lose weight, or maintain an active lifestyle, your journey starts with a clear goal.",
    },
    {
      number: "04",
      title: "Supportive Community",
      description:
        "Become part of a motivating fitness community. Encourage others, celebrate achievements, and stay focused on building healthier habits together.",
    },
    {
      number: "05",
      title: "Strength and Conditioning",
      description:
        "Improve strength, flexibility, balance, and endurance through structured workouts that help you develop a stronger and more capable body.",
    },
    {
      number: "06",
      title: "Focus on Progress",
      description:
        "Build healthy routines through consistency and patience. Track your progress, celebrate improvements, and continue working toward your personal fitness goals.",
    },
  ];

  return (
    <section className="about" id="about">
      {/* SECTION 1: ABOUT OUR GYM */}

      <div className="about-container">
        <div className="about-image">
          <img
            src="/images/gym2.png"
            alt="AADUKALAM Fitness Club training area"
          />

          <div className="about-image-label">
            <span>STRENGTH</span>
            <span className="about-red-text">DISCIPLINE</span>
            <span>RESULTS</span>
          </div>
        </div>

        <div className="about-content">
          <p className="about-tagline">WHO WE ARE</p>

          <h2>
            MORE THAN A GYM.
            <br />
            <span>A WAY OF LIFE.</span>
          </h2>

          <p className="about-description">
            Welcome to AADUKALAM FITNESS CLUB, where dedication meets
            determination. We believe fitness is more than lifting weights or
            spending time on exercise equipment. It is about developing
            discipline, building confidence, improving physical health, and
            creating habits that support a better lifestyle.
          </p>

          <p className="about-description">
            Our goal is to help people become stronger, healthier, and more
            confident through regular exercise and a positive approach to
            fitness. We want every member to feel motivated to begin their
            journey, regardless of their experience or current fitness level.
          </p>

          <p className="about-description">
            Whether you are a beginner taking your first step into a gym or an
            experienced athlete looking for new challenges, we aim to provide an
            environment where you can learn, train, and work towards your
            personal goals.
          </p>

          <p className="about-description">
            At AADUKALAM FITNESS CLUB, we understand that every individual has a
            different starting point. That is why we encourage members to focus
            on their own progress instead of comparing themselves with others.
          </p>
        </div>
      </div>

      {/* SECTION 2: OUR MISSION AND VISION */}

      <div className="about-purpose">
        <div className="about-section-heading">
          <p className="about-tagline">WHAT DRIVES US</p>

          <h2>
            OUR MISSION <span>&amp; VISION</span>
          </h2>

          <p>
            Creating a fitness environment where everyone can work towards
            becoming a stronger version of themselves.
          </p>
        </div>

        <div className="about-purpose-grid">
          <article className="about-purpose-card">
            <span className="about-purpose-number">01</span>

            <h3>OUR MISSION</h3>

            <p>
              Our mission is to encourage people to make fitness an important
              part of their everyday lives. We aim to create a welcoming
              training environment where members can develop strength, improve
              endurance, and build confidence through regular physical activity.
            </p>

            <p>
              We believe that fitness should be approachable, enjoyable, and
              sustainable. Through proper guidance, suitable training routines,
              and a supportive atmosphere, we want to help members develop
              habits that continue beyond their time inside the gym.
            </p>

            <p>
              We also encourage members to understand the importance of
              recovery, balanced nutrition, consistency, and patience. Our goal
              is to help people work towards realistic fitness targets while
              maintaining a positive attitude throughout their journey.
            </p>
          </article>

          <article className="about-purpose-card">
            <span className="about-purpose-number">02</span>

            <h3>OUR VISION</h3>

            <p>
              Our vision is to build a fitness community where dedication,
              discipline, and personal improvement are celebrated. We want
              AADUKALAM FITNESS CLUB to be a place where people feel encouraged
              to challenge themselves and take pride in their achievements.
            </p>

            <p>
              We aspire to promote a culture in which fitness is not treated as
              a temporary activity but as a lifelong commitment to physical
              well-being. We believe that regular exercise can help people
              develop healthier routines and a stronger mindset.
            </p>

            <p>
              By encouraging continuous learning, responsible training, and
              mutual support, we hope to inspire our members to maintain an
              active lifestyle and motivate others to begin their own fitness
              journeys.
            </p>
          </article>
        </div>
      </div>

      {/* SECTION 3: OUR FITNESS PHILOSOPHY */}

      <div className="about-philosophy">
        <div className="about-philosophy-content">
          <p className="about-tagline">OUR FITNESS PHILOSOPHY</p>

          <h2>
            SMALL STEPS.
            <br />
            <span>BIG RESULTS.</span>
          </h2>

          <p className="about-description">
            We believe that successful fitness journeys are built through
            consistency rather than perfection. You do not need to be the
            strongest person in the gym on your first day. You only need the
            willingness to start, learn, and keep moving forward.
          </p>

          <p className="about-description">
            Every workout is an opportunity to improve. Some days you might feel
            stronger, while other days you may need to slow down and focus on
            recovery. Both are normal parts of a sustainable fitness routine.
          </p>

          <p className="about-description">
            We encourage members to set achievable goals, learn correct exercise
            techniques, and follow routines appropriate for their abilities.
            Progress takes time, and developing healthy habits is more valuable
            than expecting instant results.
          </p>

          <p className="about-description">
            Our philosophy is simple: show up consistently, train responsibly,
            respect your body, and never stop learning. With patience and
            dedication, you can work towards improved strength, endurance, and
            confidence.
          </p>
        </div>

        <div className="about-quote-card">
          <span className="about-quote-mark">"</span>

          <h3>
            YOUR ONLY
            <br />
            COMPETITION
            <br />
            IS WHO YOU
            <br />
            WERE YESTERDAY.
          </h3>

          <div className="about-quote-line"></div>

          <p>AADUKALAM FITNESS CLUB</p>
        </div>
      </div>

      {/* SECTION 4: WHY CHOOSE US */}

      <div className="about-benefits">
        <div className="about-section-heading">
          <p className="about-tagline">THE AADUKALAM DIFFERENCE</p>

          <h2>
            WHY CHOOSE <span>US?</span>
          </h2>

          <p>
            More than equipment and exercise, we encourage a lifestyle built
            around discipline, determination, and continuous growth.
          </p>
        </div>

        <div className="about-features">
          {features.map((feature) => (
            <article className="about-feature" key={feature.number}>
              <span className="about-number">{feature.number}</span>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* SECTION 5: OUR COMMITMENT */}

      <div className="about-commitment">
        <p className="about-tagline">OUR COMMITMENT TO YOU</p>

        <h2>
          YOUR GOALS.
          <br />
          <span>YOUR JOURNEY.</span>
        </h2>

        <p className="about-description">
          We understand that starting a fitness routine can feel challenging.
          Building new habits requires effort, patience, and commitment. That is
          why we believe a gym should offer more than equipment. It should
          provide an environment where people feel encouraged to learn, improve,
          and keep going.
        </p>

        <p className="about-description">
          We encourage members to approach training with a positive mindset,
          respect their individual limits, and remain focused on long-term
          well-being. Every person has a different starting point, and every
          step towards a healthier lifestyle matters.
        </p>

        <p className="about-description">
          Your fitness journey does not have to be perfect. What matters is your
          willingness to keep learning, make better choices, and return to your
          goals even when progress feels slow. Celebrate your improvements, stay
          patient, and remember that small actions can build meaningful habits
          over time.
        </p>

        <p className="about-description">
          Whether you want to develop strength, improve your endurance, maintain
          your fitness, or become more active, AADUKALAM FITNESS CLUB encourages
          you to take that first step and work towards a healthier, stronger
          future.
        </p>

        <a href="/membership" className="about-cta-button">
          START YOUR FITNESS JOURNEY →
        </a>
      </div>
    </section>
  );
}

export default About;
