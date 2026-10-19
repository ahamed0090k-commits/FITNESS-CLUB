import { Link } from "react-router-dom";
import "./Membership.css";

function Membership() {
  const plans = [
    {
      id: "basic",
      name: "BASIC",
      price: "999",
      features: [
        "Gym Access",
        "Basic Equipment",
        "Locker Facility",
      ],
    },
    {
      id: "standard",
      name: "STANDARD",
      price: "1499",
      features: [
        "Gym Access",
        "Cardio Training",
        "Group Workout Sessions",
      ],
    },
    {
      id: "premium",
      name: "PREMIUM",
      price: "2499",
      features: [
        "All Gym Facilities",
        "Personal Trainer",
        "Diet Guidance",
      ],
    },
  ];

  return (
    <section className="membership" id="membership">
      <div className="membership-heading">
        <p>CHOOSE YOUR PLAN</p>
        <h1>MEMBERSHIP PLANS</h1>
        <span>Invest in yourself. Build a stronger you.</span>
      </div>

      <div className="membership-container">
        {plans.map((plan) => (
          <div className="membership-card" key={plan.id}>
            <h2>{plan.name}</h2>

            <h3>
              ₹{plan.price}
              <span>/month</span>
            </h3>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            {/* JOIN NOW OPENS REGISTRATION FORM */}
            <Link
              to={`/join-now/${plan.id}`}
              className="membership-btn"
            >
              JOIN NOW →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Membership;