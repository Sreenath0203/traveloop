import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

.dash-root {
  min-height: 100vh;
  background: var(--paper);
  font-family: 'DM Sans', sans-serif;
  color: var(--ink);
  position: relative;
  overflow-x: hidden;
}

.dash-root::before {
  content: '';
  position: fixed;
  top: -200px;
  right: -200px;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.dash-root::after {
  content: '';
  position: fixed;
  bottom: -150px;
  left: -150px;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* MAIN CONTAINER */

.dash-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 56px 56px 80px;
}

/* HEADER */

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 72px;
}

.brand-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
  padding: 5px 14px;
  border: 1px solid rgba(255,107,53,0.25);
  border-radius: 999px;
}

.brand-name {
  font-family: 'Syne', sans-serif;
  font-size: 64px;
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 0;
}

.brand-name span {
  color: var(--accent);
}

.brand-sub {
  margin-top: 16px;
  color: var(--muted);
  font-size: 15px;
  font-weight: 300;
  max-width: 500px;
  line-height: 1.7;
}

/* PROFILE */

.profile-link {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--muted);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: 0.2s;
}

.profile-link:hover {
  color: var(--accent);
}

/* BUTTONS */

.nav-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 13.5px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.2s ease;
  border: 1.5px solid transparent;
}

.nav-btn:hover {
  transform: translateY(-2px);
}

.nav-btn-purple {
  background: #f3f0ff;
  border-color: #d8b4fe;
  color: #6d28d9;
}
.nav-btn-purple:hover {
  background: #6d28d9;
  color: white;
}

.nav-btn-teal {
  background: #ecfeff;
  border-color: #99f6e4;
  color: #0f766e;
}
.nav-btn-teal:hover {
  background: #0f766e;
  color: white;
}

.nav-btn-green {
  background: #f0fdf4;
  border-color: #86efac;
  color: #166534;
}
.nav-btn-green:hover {
  background: #166534;
  color: white;
}

.nav-btn-indigo {
  background: #eef2ff;
  border-color: #a5b4fc;
  color: #3730a3;
}
.nav-btn-indigo:hover {
  background: #3730a3;
  color: white;
}

.nav-btn-orange {
  background: #fff7ed;
  border-color: #fdba74;
  color: #c2410c;
}
.nav-btn-orange:hover {
  background: #c2410c;
  color: white;
}

/* CREATE BTN */

.create-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--ink);
  color: white;
  text-decoration: none;
  padding: 15px 28px;
  border-radius: 14px;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 15px;
  transition: 0.25s ease;
  border: 2px solid var(--ink);
  white-space: nowrap;
}

.create-btn:hover {
  background: var(--accent);
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(255,107,53,0.25);
}

/* STATS */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 28px;
  margin-bottom: 72px;
}

.stat-card {
  background: var(--card-bg);
  border: 1.5px solid var(--border);
  border-radius: 24px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: 0.25s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 50px rgba(0,0,0,0.07);
}

.stat-card::after {
  content: '';
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  opacity: 0.06;
}

.stat-card:nth-child(1)::after {
  background: var(--accent);
}
.stat-card:nth-child(2)::after {
  background: var(--accent2);
}
.stat-card:nth-child(3)::after {
  background: #7c3aed;
}

.stat-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--muted);
  margin-bottom: 14px;
}

.stat-value {
  font-family: 'Syne', sans-serif;
  font-size: 58px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
}

.stat-card:nth-child(1) .stat-value {
  color: var(--accent);
}
.stat-card:nth-child(2) .stat-value {
  color: var(--accent2);
}
.stat-card:nth-child(3) .stat-value {
  color: #7c3aed;
}

/* SECTION */

.section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 34px;
}

.section-title {
  font-family: 'Syne', sans-serif;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.section-line {
  flex: 1;
  height: 1.5px;
  background: var(--border);
}

/* TRIPS GRID */

.trips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 32px;
  align-items: start;
}

/* TRIP CARD */

.trip-card {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 28px;
  overflow: hidden;
  transition: 0.3s ease;
}

.trip-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  border-color: rgba(255,107,53,0.18);
}

/* BANNER */

.trip-banner {
  height: 180px;
  background: linear-gradient(135deg, #0f0e17 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 26px;
}

.trip-banner::before {
  content: '';
  position: absolute;
  top: -40px;
  right: -40px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(255,107,53,0.15);
}

.trip-banner::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: 10px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(0,102,204,0.12);
}

.trip-banner-icon {
  font-size: 42px;
  z-index: 1;
}

.trip-banner-tag {
  z-index: 1;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  background: rgba(255,255,255,0.08);
  padding: 6px 14px;
  border-radius: 999px;
}

/* BODY */

.trip-body {
  padding: 30px;
}

.trip-name {
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
}

.trip-desc {
  color: var(--muted);
  line-height: 1.7;
  font-size: 14px;
  margin-bottom: 24px;
  min-height: 48px;
}

/* DATES */

.trip-dates {
  display: flex;
  gap: 28px;
  margin-bottom: 24px;
}

.trip-date-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.trip-date-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--muted);
}

.trip-date-value {
  font-size: 14px;
  font-weight: 500;
}

/* DIVIDER */

.trip-divider {
  height: 1px;
  background: var(--border);
  margin-bottom: 22px;
}

/* ACTIONS */

.trip-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.trip-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1.5px solid var(--border);
  background: var(--paper);
  color: var(--ink);
  text-decoration: none;
  font-size: 12.5px;
  font-weight: 500;
  transition: 0.2s ease;
}

.trip-btn:hover {
  background: var(--ink);
  color: white;
  border-color: var(--ink);
}

/* EMPTY STATE */

.empty-state {
  grid-column: 1 / -1;
  background: white;
  border: 2px dashed var(--border);
  border-radius: 28px;
  padding: 70px 40px;
  text-align: center;
}

.empty-icon {
  font-size: 52px;
  margin-bottom: 18px;
}

.empty-text {
  color: var(--muted);
  font-size: 16px;
}

/* LOADING */

.loading-text {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 20px;
}

/* RESPONSIVE */

@media (max-width: 1024px) {

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .brand-name {
    font-size: 52px;
  }
}

@media (max-width: 768px) {

  .dash-inner {
    padding: 28px 18px 60px;
  }

  .header {
    flex-direction: column;
    gap: 28px;
  }

  .brand-name {
    font-size: 42px;
  }

  .stats-grid,
  .trips-grid {
    grid-template-columns: 1fr;
  }

  .trip-banner {
    height: 150px;
  }
}
`;

function Dashboard() {

  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrips = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/trips"
      );

      console.log("TRIPS DATA:", response.data);

      setTrips(response.data);
      setLoading(false);

    } catch (error) {

      console.log("ERROR:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <>
      <style>{styles}</style>

      <div className="dash-root">

        <div className="dash-inner">

          {/* HEADER */}

          <div className="header">

            <div>

              <a href="/user-profile" className="profile-link">
                ↗ User Profile
              </a>

              <div className="brand-eyebrow">
                Smart Travel Planner
              </div>

              <h1 className="brand-name">
                Travel<span>oop</span>
              </h1>

              <p className="brand-sub">
                Multi-city journeys, beautifully planned with AI-powered itineraries,
                budgeting, activities, and collaboration.
              </p>

              {/* NAVIGATION */}

              <div className="nav-buttons">

                <Link to="/ai-planner" className="nav-btn nav-btn-purple">
                  🤖 AI Trip Planner
                </Link>

                <Link to="/itinerary-builder" className="nav-btn nav-btn-teal">
                  🗺 Build Itinerary
                </Link>

                <Link to="/budget-analytics" className="nav-btn nav-btn-green">
                  💰 Budget Analytics
                </Link>

                <Link to="/shared-itinerary" className="nav-btn nav-btn-indigo">
                  🌍 Shared Trips
                </Link>

                <Link to="/activity-search" className="nav-btn nav-btn-orange">
                  🎯 Explore Activities
                </Link>

              </div>

            </div>

            <Link to="/create-trip" className="create-btn">
              + Create Trip
            </Link>

          </div>

          {/* STATS */}

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-label">Total Trips</div>
              <div className="stat-value">{trips.length}</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Upcoming Trips</div>
              <div className="stat-value">{trips.length}</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Destinations</div>
              <div className="stat-value">{trips.length * 2}</div>
            </div>

          </div>

          {/* SECTION */}

          <div className="section-header">

            <div className="section-title">
              My Trips
            </div>

            <div className="section-line"></div>

          </div>

          {loading && (
            <p className="loading-text">
              Loading trips...
            </p>
          )}

          {/* TRIPS */}

          <div className="trips-grid">

            {!loading && trips.length === 0 && (

              <div className="empty-state">

                <div className="empty-icon">
                  🌍
                </div>

                <div className="empty-text">
                  No trips yet. Create your first journey and start exploring.
                </div>

              </div>

            )}

            {trips.map((trip) => (

              <div key={trip.id} className="trip-card">

                {/* BANNER */}

                <div className="trip-banner">

                  <div className="trip-banner-icon">
                    ✈
                  </div>

                  <div className="trip-banner-tag">
                    Confirmed
                  </div>

                </div>

                {/* BODY */}

                <div className="trip-body">

                  <div className="trip-name">
                    {trip.trip_name}
                  </div>

                  <div className="trip-desc">
                    {trip.description}
                  </div>

                  {/* DATES */}

                  <div className="trip-dates">

                    <div className="trip-date-item">

                      <div className="trip-date-label">
                        Start
                      </div>

                      <div className="trip-date-value">
                        {trip.start_date?.split("T")[0]}
                      </div>

                    </div>

                    <div className="trip-date-item">

                      <div className="trip-date-label">
                        End
                      </div>

                      <div className="trip-date-value">
                        {trip.end_date?.split("T")[0]}
                      </div>

                    </div>

                  </div>

                  <div className="trip-divider"></div>

                  {/* ACTION BUTTONS */}

                  <div className="trip-actions">

                    <Link to="/itinerary-builder" className="trip-btn">
                      🗺 Itinerary
                    </Link>

                    <Link to="/budget-analytics" className="trip-btn">
                      💰 Budget
                    </Link>

                    <Link to="/packing-checklist" className="trip-btn">
                      🧳 Packing
                    </Link>

                    <Link to="/trip-notes" className="trip-btn">
                      📝 Notes
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;