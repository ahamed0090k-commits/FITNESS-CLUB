import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./JoinNow.css";

const membershipPlans = {
  basic: {
    name: "BASIC",
    price: 999,
  },
  standard: {
    name: "STANDARD",
    price: 1499,
  },
  premium: {
    name: "PREMIUM",
    price: 2499,
  },
};

function JoinNow() {
  const { plan } = useParams();

  const selectedPlan = membershipPlans[plan];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    startDate: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!selectedPlan) {
    return (
      <main className="join-page">
        <h1>Membership plan not found</h1>
        <Link to="/membership" className="back-membership">
          VIEW MEMBERSHIP PLANS
        </Link>
      </main>
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="join-page">
        <section className="success-card">
          <div className="success-icon">✓</div>

          <p className="join-tag">AADUKALAM FITNESS CLUB</p>

          <h1>YOU'RE ON YOUR WAY!</h1>

          <p>
            Thank you, {formData.fullName}! Your registration form has
            been submitted successfully in this demo.
          </p>

          <div className="success-details">
            <p>
              <strong>Membership:</strong> {selectedPlan.name}
            </p>

            <p>
              <strong>Price:</strong> ₹{selectedPlan.price}/month
            </p>

            <p>
              <strong>Email:</strong> {formData.email}
            </p>
          </div>

          <Link to="/" className="join-submit">
            BACK TO HOME
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="join-page">
      <section className="join-wrapper">
        <div className="join-info">
          <p className="join-tag">TAKE THE FIRST STEP</p>

          <h1>
            JOIN THE
            <br />
            <span>STRONG SIDE.</span>
          </h1>

          <p className="join-description">
            Your fitness journey starts here. Complete the form to
            continue with your selected membership.
          </p>

          <div className="selected-plan">
            <p>YOUR SELECTED PLAN</p>

            <h2>{selectedPlan.name}</h2>

            <h3>
              ₹{selectedPlan.price}
              <span> / month</span>
            </h3>
          </div>

          <Link to="/membership" className="change-plan">
            ← CHANGE MEMBERSHIP
          </Link>
        </div>

        <form className="join-form" onSubmit={handleSubmit}>
          <h2>REGISTRATION FORM</h2>

          <p className="form-description">
            Enter your details to get started.
          </p>

          <div className="form-group">
            <label htmlFor="fullName">FULL NAME</label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">EMAIL ADDRESS</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">PHONE NUMBER</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              maxLength={10}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="startDate">PREFERRED START DATE</label>

            <input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              min={new Date().toLocaleDateString("en-CA")}
              required
            />
          </div>

          <button type="submit" className="join-submit">
            COMPLETE REGISTRATION →
          </button>

          <p className="form-note">
            Demo only: your details are not sent to a server or saved
            permanently.
          </p>
        </form>
      </section>
    </main>
  );
}

export default JoinNow;