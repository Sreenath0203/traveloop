import { useState } from "react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --ink: #0f0e17;
  --paper: #fffcf5;
  --accent: #ff6b35;
  --accent2: #0066cc;
  --muted: #8c8a8a;
  --card-bg: #ffffff;
  --border: #e8e4dc;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.itinerary-root {
  min-height: 100vh;
  background: var(--paper);
  font-family: 'DM Sans', sans-serif;
  color: var(--ink);
  position: relative;
  overflow-x: hidden;
}

.itinerary-root::before {
  content: '';
  position: fixed;
  top: -220px;
  right: -220px;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%);
  pointer-events: none;
}

.itinerary-root::after {
  content: '';
  position: fixed;
  bottom: -180px;
  left: -180px;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%);
  pointer-events: none;
}

/* CONTAINER */

.itinerary-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 56px;
}

/* HERO */

.hero-card {
  background: rgba(255,255,255,0.78);
  backdrop-filter: blur(12px);
  border: 1.5px solid var(--border);
  border-radius: 36px;
  padding: 46px;
  position: relative;
  overflow: hidden;
  margin-bottom: 42px;
}

.hero-card::before {
  content: '';
  position: absolute;
  top: -70px;
  right: -70px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(255,107,53,0.08);
}

.hero-top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
}

.hero-icon {
  width: 110px;
  height: 110px;
  border-radius: 30px;
  background: linear-gradient(135deg, #0f0e17 0%, #1f2937 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  box-shadow: 0 14px 40px rgba(0,0,0,0.14);
}

.hero-content h1 {
  margin: 0;
  font-family: 'Syne', sans-serif;
  font-size: 60px;
  line-height: 0.95;
  letter-spacing: -0.05em;
}

.hero-content h1 span {
  color: var(--accent);
}

.hero-sub {
  margin-top: 14px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  background: rgba(255,107,53,0.08);
  border: 1px solid rgba(255,107,53,0.14);
  color: var(--accent);
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
}

/* FORM */

.form-card {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 32px;
  padding: 34px;
  margin-bottom: 42px;
}

.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 20px;
  align-items: end;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.input-field {
  width: 100%;
  height: 58px;
  border-radius: 18px;
  border: 1.5px solid var(--border);
  background: rgba(255,255,255,0.85);
  padding: 0 18px;
  font-size: 15px;
  font-family: 'DM Sans', sans-serif;
  color: var(--ink);
  transition: 0.2s ease;
  outline: none;
}

.input-field:focus {
  border-color: rgba(255,107,53,0.5);
  box-shadow: 0 0 0 5px rgba(255,107,53,0.08);
}

.generate-btn {
  border: none;
  background: linear-gradient(
    135deg,
    var(--accent),
    #ff8c61
  );
  color: white;
  height: 58px;
  padding: 0 30px;
  border-radius: 18px;
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease;
  box-shadow: 0 14px 36px rgba(255,107,53,0.18);
}

.generate-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 46px rgba(255,107,53,0.24);
}

/* SECTION */

.section-header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 28px;
}

.section-title {
  font-family: 'Syne', sans-serif;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.section-line {
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* EMPTY */

.empty-box {
  background: white;
  border: 2px dashed var(--border);
  border-radius: 28px;
  padding: 60px 40px;
  text-align: center;
}

.empty-icon {
  font-size: 54px;
  margin-bottom: 18px;
}

.empty-title {
  font-family: 'Syne', sans-serif;
  font-size: 28px;
  margin-bottom: 10px;
}

.empty-text {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
}

/* PLAN CARDS */

.timeline {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.day-card {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 32px;
  overflow: hidden;
  transition: 0.25s ease;
}

.day-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,107,53,0.2);
  box-shadow: 0 18px 50px rgba(0,0,0,0.07);
}

/* TOP */

.day-top {
  padding: 28px 32px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.day-left {
  display: flex;
  align-items: center;
  gap: 18px;
}

.day-number {
  width: 72px;
  height: 72px;
  border-radius: 24px;
  background: linear-gradient(
    135deg,
    var(--accent),
    #ff8c61
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: white;
  box-shadow: 0 12px 28px rgba(255,107,53,0.22);
}

.day-title {
  font-family: 'Syne', sans-serif;
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.day-destination {
  color: var(--muted);
  margin-top: 6px;
  font-size: 14px;
}

.budget-chip {
  background: rgba(0,102,204,0.08);
  border: 1px solid rgba(0,102,204,0.12);
  color: var(--accent2);
  padding: 14px 18px;
  border-radius: 18px;
  font-size: 15px;
  font-weight: 700;
}

/* ACTIVITIES */

.activity-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  padding: 30px;
}

.activity-card {
  border-radius: 24px;
  padding: 24px;
  border: 1.5px solid transparent;
  transition: 0.22s ease;
}

.activity-card:hover {
  transform: translateY(-2px);
}

.activity-card.morning {
  background: #fff8e7;
  border-color: #ffe2a7;
}

.activity-card.afternoon {
  background: #fff3eb;
  border-color: #ffd2b8;
}

.activity-card.evening {
  background: #f6f1ff;
  border-color: #d9c7ff;
}

.activity-icon {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  background: rgba(255,255,255,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 18px;
}

.activity-title {
  font-family: 'Syne', sans-serif;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
}

.activity-text {
  font-size: 15px;
  line-height: 1.8;
  color: #444;
}

/* RESPONSIVE */

@media (max-width: 980px) {

  .activity-grid {
    grid-template-columns: 1fr;
  }

  .input-grid {
    grid-template-columns: 1fr;
  }

  .generate-btn {
    width: 100%;
  }
}

@media (max-width: 768px) {

  .itinerary-inner {
    padding: 28px 18px 60px;
  }

  .hero-card {
    padding: 34px 24px;
  }

  .hero-icon {
    width: 90px;
    height: 90px;
    font-size: 36px;
  }

  .hero-content h1 {
    font-size: 42px;
  }

  .form-card {
    padding: 24px;
  }

  .day-top {
    padding: 24px;
  }

  .activity-grid {
    padding: 24px;
  }

  .day-number {
    width: 62px;
    height: 62px;
    font-size: 20px;
  }

  .day-title {
    font-size: 28px;
  }
}
`;

function ItineraryPlanner() {

  const [destination, setDestination] =
    useState("");

  const [days, setDays] =
    useState("");

  const [plan, setPlan] =
    useState([]);

  const generatePlan = () => {

    const generated = [];

    for (let i = 1; i <= days; i++) {

      generated.push({

        day: i,

        morning:
          "Visit famous attractions",

        afternoon:
          "Explore local restaurants",

        evening:
          "Shopping and nightlife",

        budget:
          2000 + i * 500
      });
    }

    setPlan(generated);
  };

  return (
    <>
      <style>{styles}</style>

      <div className="itinerary-root">

        <div className="itinerary-inner">

          {/* HERO */}

          <div className="hero-card">

            <div className="hero-top">

              <div className="hero-icon">
                🗺️
              </div>

              <div className="hero-content">

                <h1>
                  Smart <span>Itinerary</span>
                </h1>

                <div className="hero-sub">
                  Generate elegant day-wise travel plans
                  with activities, schedules, and budget
                  breakdowns instantly.
                </div>

                <div className="hero-badge">
                  ✨ AI-assisted travel planning
                </div>

              </div>

            </div>

          </div>

          {/* FORM */}

          <div className="form-card">

            <div className="input-grid">

              <div className="input-group">

                <label className="input-label">
                  Destination
                </label>

                <input
                  type="text"
                  placeholder="Enter destination"
                  onChange={(e) =>
                    setDestination(e.target.value)
                  }
                  className="input-field"
                />

              </div>

              <div className="input-group">

                <label className="input-label">
                  Number of Days
                </label>

                <input
                  type="number"
                  placeholder="Trip duration"
                  onChange={(e) =>
                    setDays(e.target.value)
                  }
                  className="input-field"
                />

              </div>

              <button
                onClick={generatePlan}
                className="generate-btn"
              >
                Generate Itinerary
              </button>

            </div>

          </div>

          {/* SECTION */}

          <div className="section-header">

            <div className="section-title">
              Day-wise Plan
            </div>

            <div className="section-line"></div>

          </div>

          {/* EMPTY */}

          {plan.length === 0 ? (

            <div className="empty-box">

              <div className="empty-icon">
                ✈️
              </div>

              <div className="empty-title">
                No Itinerary Yet
              </div>

              <div className="empty-text">
                Enter your destination and trip duration
                to generate a smart travel itinerary.
              </div>

            </div>

          ) : (

            <div className="timeline">

              {plan.map((item) => (

                <div
                  key={item.day}
                  className="day-card"
                >

                  {/* TOP */}

                  <div className="day-top">

                    <div className="day-left">

                      <div className="day-number">
                        {item.day}
                      </div>

                      <div>

                        <div className="day-title">
                          Day {item.day}
                        </div>

                        <div className="day-destination">
                          Destination: {destination}
                        </div>

                      </div>

                    </div>

                    <div className="budget-chip">
                      ₹ {item.budget}
                    </div>

                  </div>

                  {/* ACTIVITIES */}

                  <div className="activity-grid">

                    {/* MORNING */}

                    <div className="activity-card morning">

                      <div className="activity-icon">
                        🌅
                      </div>

                      <div className="activity-title">
                        Morning
                      </div>

                      <div className="activity-text">
                        {item.morning}
                      </div>

                    </div>

                    {/* AFTERNOON */}

                    <div className="activity-card afternoon">

                      <div className="activity-icon">
                        ☀️
                      </div>

                      <div className="activity-title">
                        Afternoon
                      </div>

                      <div className="activity-text">
                        {item.afternoon}
                      </div>

                    </div>

                    {/* EVENING */}

                    <div className="activity-card evening">

                      <div className="activity-icon">
                        🌙
                      </div>

                      <div className="activity-title">
                        Evening
                      </div>

                      <div className="activity-text">
                        {item.evening}
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </>
  );
}

export default ItineraryPlanner;