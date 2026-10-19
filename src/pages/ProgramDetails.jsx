import { useParams, useNavigate } from "react-router-dom";
import "./ProgramDetails.css";

function ProgramDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // All 7 gym programs
  const programs = [
    {
      id: 1,
      title: "STRENGTH TRAINING",
      description:
        "Build strength, develop muscles, and improve your overall physical performance.",
      duration: "45–60 minutes",
      level: "Beginner to Advanced",

      benefits: [
        "Build muscle strength",
        "Improve muscular endurance",
        "Support healthy bones",
        "Improve body stability",
        "Develop better exercise technique",
        "Make everyday activities easier",
      ],

      exercises: [
        "Squats",
        "Bench Press",
        "Deadlifts",
        "Shoulder Press",
        "Lat Pulldowns",
        "Dumbbell Rows",
      ],
    },

    {
      id: 2,
      title: "BODYBUILDING",
      description:
        "Focus on muscle growth, body development, and balanced training.",
      duration: "45–75 minutes",
      level: "Beginner to Advanced",

      benefits: [
        "Support muscle growth",
        "Improve muscle definition",
        "Develop balanced muscle groups",
        "Build muscular strength",
        "Improve workout consistency",
        "Support better body composition",
      ],

      exercises: [
        "Dumbbell Curls",
        "Chest Press",
        "Lat Pulldowns",
        "Lateral Raises",
        "Triceps Pushdowns",
        "Leg Press",
      ],
    },

    {
      id: 3,
      title: "WEIGHT LOSS",
      description:
        "Combine physical activity and healthy habits to work towards your fitness goals.",
      duration: "30–45 minutes",
      level: "Beginner to Advanced",

      benefits: [
        "Increase daily calorie expenditure",
        "Support gradual fat loss",
        "Improve cardiovascular fitness",
        "Help maintain muscle while losing weight",
        "Build active lifestyle habits",
        "Improve overall fitness",
      ],

      exercises: [
        "Brisk Walking",
        "Stationary Cycling",
        "Bodyweight Squats",
        "Step-Ups",
        "Modified Jumping Jacks",
        "Elliptical Training",
      ],
    },

    {
      id: 4,
      title: "CARDIO TRAINING",
      description:
        "Improve endurance and cardiovascular fitness with regular physical activity.",
      duration: "20–45 minutes",
      level: "Beginner to Advanced",

      benefits: [
        "Improve cardiovascular health",
        "Increase stamina",
        "Support healthy blood pressure",
        "Improve exercise endurance",
        "Support weight management",
        "Help improve mood and energy",
      ],

      exercises: [
        "Treadmill Walking",
        "Stationary Cycling",
        "Elliptical Training",
        "Jump Rope",
        "Rowing Machine",
        "Stair Climbing",
      ],
    },

    {
      id: 5,
      title: "PERSONAL TRAINING",
      description:
        "Follow a structured workout plan tailored to your individual fitness goals.",
      duration: "45–60 minutes",
      level: "Personalized",

      benefits: [
        "Receive individualized guidance",
        "Learn correct exercise techniques",
        "Follow structured workout plans",
        "Track fitness progress",
        "Adjust workouts to your ability",
        "Build consistent training habits",
      ],

      exercises: [
        "Goblet Squats",
        "Dumbbell Bench Press",
        "Seated Cable Rows",
        "Dumbbell Shoulder Press",
        "Plank",
        "Walking Lunges",
      ],
    },

    {
      id: 6,
      title: "HIIT WORKOUTS",
      description:
        "Alternate challenging exercise intervals with recovery periods.",
      duration: "15–30 minutes",
      level: "Adjustable to Fitness Level",

      benefits: [
        "Improve cardiovascular fitness",
        "Challenge muscular endurance",
        "Support calorie expenditure",
        "Improve exercise conditioning",
        "Offer time-efficient workouts",
        "Develop workout variety",
      ],

      exercises: [
        "Jumping Jacks",
        "Mountain Climbers",
        "Bodyweight Squats",
        "High Knees",
        "Modified Burpees",
        "Fast Walking Intervals",
      ],
    },

    {
      id: 7,
      title: "FUNCTIONAL FITNESS",
      description:
        "Improve balance, mobility, coordination, and everyday strength.",
      duration: "30–45 minutes",
      level: "Beginner to Advanced",

      benefits: [
        "Improve balance and coordination",
        "Develop movement control",
        "Build practical strength",
        "Improve mobility",
        "Develop muscular endurance",
        "Support everyday movement",
      ],

      exercises: [
        "Step-Ups",
        "Farmer's Walk",
        "Goblet Squats",
        "Medicine Ball Slams",
        "Walking Lunges",
        "Resistance Band Rows",
      ],
    },
  ];

  // Find the selected program using its ID
  const program = programs.find(
    (item) => item.id === Number(id)
  );

  // Handle an invalid program ID
  if (!program) {
    return (
      <section className="program-details">
        <h2>Program Not Found</h2>

        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>
      </section>
    );
  }

  return (
    <section className="program-details">
      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate("/#programs")}
      >
        ← Back to Programs
      </button>

      {/* Program Header */}
      <div className="details-hero">
        <p className="details-label">
          AADUKALAM FITNESS CLUB
        </p>

        <h1>{program.title}</h1>

        <p className="details-description">
          {program.description}
        </p>

        {/* Program Information */}
        <div className="details-info">
          <div>
            <span>WORKOUT DURATION</span>
            <h3>{program.duration}</h3>
          </div>

          <div>
            <span>FITNESS LEVEL</span>
            <h3>{program.level}</h3>
          </div>
        </div>

      </div>

      {/* Benefits and Exercises */}
      <div className="details-content">
        {/* Benefits */}
        <div className="details-box">
          <h2>PROGRAM BENEFITS</h2>

          {program.benefits.map((benefit, index) => (
            <p className="benefit-item" key={index}>
              <span className="benefit-check">✓</span>
              {benefit}
            </p>
          ))}
        </div>

        {/* Exercises */}
        <div className="details-box">
          <h2>EXAMPLE EXERCISES</h2>

          {program.exercises.map((exercise, index) => (
            <p className="exercise-item" key={index}>
              <span className="exercise-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              {exercise}
            </p>
          ))}
        </div>
      </div> 
      <hr />

      {/* Bottom Call to Action */}
      <div className="details-footer">
        <h2>READY TO GET STRONGER?</h2>

        <p>
          Start working towards your fitness goals
          with AADUKALAM FITNESS CLUB.
        </p>

        <button
          className="join-program-button"
          onClick={() => navigate("/membership#membership")}
        >
          START YOUR FITNESS JOURNEY →
        </button>
      </div>
    </section>
  );
}

export default ProgramDetails;