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

.shared-root {
  min-height: 100vh;
  background: var(--paper);
  font-family: 'DM Sans', sans-serif;
  color: var(--ink);
  position: relative;
  overflow-x: hidden;
}

.shared-root::before {
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

.shared-root::after {
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

.shared-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 56px;
}

/* HERO */

.hero-card {
  background: rgba(255,255,255,0.78);
  backdrop-filter: blur(12px);
  border: 1.5px solid var(--border);
  border-radius: 36px;
  padding: 48px;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
}

.hero-card::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -80px;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: rgba(255,107,53,0.08);
}

.hero-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.hero-left {
  display: flex;
  align-items: center;
  gap: 26px;
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
  font-size: 44px;
  box-shadow: 0 14px 40px rgba(0,0,0,0.14);
}

.hero-content h1 {
  margin: 0;
  font-family: 'Syne', sans-serif;
  font-size: 58px;
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

.creator-badge {
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

/* BUTTON */

.copy-btn {
  background: var(--ink);
  color: white;
  border: none;
  padding: 16px 28px;
  border-radius: 16px;
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease;
  white-space: nowrap;
}

.copy-btn:hover {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(255,107,53,0.22);
}

/* SECTION */

.section-header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 30px;
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

/* TIMELINE */

.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 11px;
  width: 2px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255,107,53,0.4),
    rgba(0,102,204,0.15)
  );
}

/* TIMELINE CARD */

.timeline-card {
  position: relative;
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 30px;
  padding: 28px;
  margin-bottom: 28px;
  transition: 0.25s ease;
}

.timeline-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,107,53,0.2);
  box-shadow: 0 16px 45px rgba(0,0,0,0.06);
}

.timeline-dot {
  position: absolute;
  left: -38px;
  top: 36px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent),
    #ff8c61
  );
  border: 4px solid var(--paper);
  box-shadow: 0 0 0 4px rgba(255,107,53,0.15);
}

/* CITY */

.city-name {
  font-family: 'Syne', sans-serif;
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 6px;
}

.city-name span {
  color: var(--accent);
}

.trip-date {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 24px;
  letter-spacing: 0.03em;
}

/* ACTIVITY */

.activity-card {
  background: linear-gradient(
    135deg,
    rgba(255,107,53,0.05),
    rgba(0,102,204,0.04)
  );
  border: 1.5px solid var(--border);
  border-radius: 22px;
  padding: 22px;
}

.activity-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 10px;
}

.activity-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--ink);
  font-weight: 500;
}

/* FOOTER */

.footer-box {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.footer-btn {
  background: linear-gradient(
    135deg,
    var(--accent),
    #ff8c61
  );
  color: white;
  border: none;
  padding: 18px 34px;
  border-radius: 18px;
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease;
  box-shadow: 0 14px 36px rgba(255,107,53,0.18);
}

.footer-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 46px rgba(255,107,53,0.25);
}

/* RESPONSIVE */

@media (max-width: 768px) {

  .shared-inner {
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

  .timeline {
    padding-left: 30px;
  }

  .timeline-dot {
    left: -29px;
  }

  .city-name {
    font-size: 28px;
  }

  .timeline-card {
    padding: 24px;
  }

  .copy-btn,
  .footer-btn {
    width: 100%;
  }
}
`;

function SharedItinerary() {

  const sharedTrip = {
    tripName: "South India Explorer",

    creator: "Mythili",

    stops: [
      {
        city: "Chennai",
        dates: "12 May - 14 May",
        activity: "Marina Beach & Food Tour"
      },

      {
        city: "Ooty",
        dates: "15 May - 18 May",
        activity: "Tea Estate & Toy Train"
      },

      {
        city: "Mysore",
        dates: "19 May - 20 May",
        activity: "Palace Visit & Shopping"
      }
    ]
  };

  const copyTrip = () => {

    navigator.clipboard.writeText(
      "https://traveloop.com/shared-trip"
    );

    alert("Trip link copied!");
  };

  return (
    <>
      <style>{styles}</style>

      <div className="shared-root">

        <div className="shared-inner">

          {/* HERO */}

          <div className="hero-card">

            <div className="hero-top">

              <div className="hero-left">

                <div className="hero-icon">
                  🌍
                </div>

                <div className="hero-content">

                  <h1>
                    {sharedTrip.tripName
                      .split(" ")
                      .slice(0, 2)
                      .join(" ")}{" "}
                    <span>
                      {sharedTrip.tripName
                        .split(" ")
                        .slice(2)
                        .join(" ")}
                    </span>
                  </h1>

                  <div className="hero-sub">
                    Explore this beautifully shared multi-city
                    itinerary and discover unforgettable travel
                    experiences across destinations.
                  </div>

                  <div className="creator-badge">
                    ✨ Shared by {sharedTrip.creator}
                  </div>

                </div>

              </div>

              <button
                onClick={copyTrip}
                className="copy-btn"
              >
                Copy Trip Link
              </button>

            </div>

          </div>

          {/* SECTION */}

          <div className="section-header">

            <div className="section-title">
              Travel Timeline
            </div>

            <div className="section-line"></div>

          </div>

          {/* TIMELINE */}

          <div className="timeline">

            {sharedTrip.stops.map((stop, index) => (

              <div
                key={index}
                className="timeline-card"
              >

                <div className="timeline-dot"></div>

                <div className="city-name">
                  {stop.city}
                </div>

                <div className="trip-date">
                  {stop.dates}
                </div>

                <div className="activity-card">

                  <div className="activity-label">
                    Planned Activity
                  </div>

                  <div className="activity-text">
                    {stop.activity}
                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* FOOTER */}

          <div className="footer-box">

            <button className="footer-btn">
              Copy This Trip
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default SharedItinerary;