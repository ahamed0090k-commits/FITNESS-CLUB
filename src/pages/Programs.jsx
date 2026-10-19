import "./Programs.css";

function Programs() {
  const programs = [
    {
      id: 1,
      title: "STRENGTH TRAINING",
      category: "BUILD STRENGTH",
      description:
        "Build muscle, improve strength, and push beyond your limits.",
      icon: "🏋️",
    },
    {
      id: 2,
      title: "BODYBUILDING",
      category: "BUILD MUSCLE",
      description:
        "Develop muscle size, improve definition, and build your physique.",
      icon: "💪",
    },
    {
      id: 3,
      title: "WEIGHT LOSS",
      category: "BURN CALORIES",
      description:
        "Work towards your weight goals with effective fitness routines.",
      icon: "🔥",
    },
    {
      id: 4,
      title: "CARDIO TRAINING",
      category: "BOOST STAMINA",
      description:
        "Improve endurance and cardiovascular fitness through active workouts.",
      icon: "🏃",
    },
    {
      id: 5,
      title: "PERSONAL TRAINING",
      category: "TRAIN SMARTER",
      description:
        "Get personalized workout guidance to match your fitness goals.",
      icon: "🎯",
    },
    {
      id: 6,
      title: "HIIT WORKOUTS",
      category: "HIGH INTENSITY",
      description: "Combine intense exercise intervals with recovery periods.",
      icon: "⚡",
    },
    {
      id: 7,
      title: "FUNCTIONAL FITNESS",
      category: "MOVE BETTER",
      description:
        "Improve balance, mobility, coordination, and everyday strength.",
      icon: "🏆",
    },
  ];

  return (
    <section className="programs" id="programs">
      <div className="programs-header">
        <p>TRAIN WITH PURPOSE</p>

        <h2>
          OUR FITNESS <span>PROGRAMS</span>
        </h2>

        <p className="programs-subtitle">
          Choose your program. Challenge yourself. Build a stronger you.
        </p>
      </div>

      <div className="programs-grid">
        
        {programs.map((program) => (
          <article className="program-card" key={program.id}>
            <div className="program-icon">{program.icon}</div>

            <div className="program-content">
              <span className="program-category">{program.category}</span>

              <h3>{program.title}</h3>

              <p>{program.description}</p>

              <a href={`/programs/${program.id}`} className="program-link">
                EXPLORE PROGRAM <span>→</span>
              </a>

            </div>
          </article>
        ))}

      </div>
    </section>
  );
}

export default Programs;
