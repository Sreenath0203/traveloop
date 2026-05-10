import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');

  :root {
    --ink: #0f0e17;
    --paper: #fffcf5;
    --accent: #ff6b35;
    --accent2: #0066cc;
    --muted: #8c8a8a;
    --card-bg: #ffffff;
    --border: #e8e4dc;
    --danger: #dc2626;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--paper);
  }

  .builder-root {
    min-height: 100vh;
    background: var(--paper);
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    position: relative;
    overflow-x: hidden;
  }

  .builder-root::before {
    content: '';
    position: fixed;
    top: -250px;
    right: -250px;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .builder-root::after {
    content: '';
    position: fixed;
    bottom: -220px;
    left: -220px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .builder-container {
    position: relative;
    z-index: 1;
    max-width: 1480px;
    margin: 0 auto;
    padding: 56px 48px 80px;
  }

  /* HEADER */
  .header {
    margin-bottom: 54px;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 16px;
    border-radius: 999px;
    border: 1px solid rgba(255,107,53,0.25);
    background: rgba(255,107,53,0.05);
    color: var(--accent);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .title {
    font-family: 'Syne', sans-serif;
    font-size: 78px;
    line-height: 0.95;
    letter-spacing: -0.05em;
    margin: 0;
    font-weight: 800;
    max-width: 850px;
  }

  .title span {
    color: var(--accent);
  }

  .subtitle {
    margin-top: 18px;
    font-size: 17px;
    color: var(--muted);
    max-width: 680px;
    line-height: 1.7;
    font-weight: 300;
  }

  /* FORM CARD */
  .form-card {
    background: rgba(255,255,255,0.82);
    backdrop-filter: blur(16px);
    border: 1.5px solid rgba(255,255,255,0.6);
    border-radius: 34px;
    padding: 38px;
    box-shadow: 0 25px 80px rgba(15,14,23,0.08);
    margin-bottom: 54px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1.1fr 1fr 1fr 1.3fr auto;
    gap: 18px;
    align-items: end;
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .field-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    padding-left: 3px;
  }

  .field-input {
    width: 100%;
    height: 62px;
    border-radius: 18px;
    border: 1.5px solid var(--border);
    background: rgba(255,255,255,0.9);
    padding: 0 18px;
    font-size: 15px;
    color: var(--ink);
    outline: none;
    transition: all 0.18s ease;
    font-family: 'DM Sans', sans-serif;
  }

  .field-input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(255,107,53,0.12);
  }

  .field-input::placeholder {
    color: #b0abab;
  }

  .add-btn {
    height: 62px;
    padding: 0 30px;
    border: none;
    border-radius: 18px;
    background: var(--ink);
    color: white;
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .add-btn:hover {
    background: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(255,107,53,0.25);
  }

  /* SECTION */
  .section-head {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 34px;
  }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0;
  }

  .section-line {
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* EMPTY */
  .empty-box {
    background: rgba(255,255,255,0.72);
    backdrop-filter: blur(14px);
    border: 2px dashed var(--border);
    border-radius: 30px;
    padding: 80px 30px;
    text-align: center;
  }

  .empty-icon {
    font-size: 60px;
    margin-bottom: 18px;
  }

  .empty-text {
    font-size: 18px;
    color: var(--muted);
    font-weight: 300;
  }

  /* TIMELINE */
  .timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 26px;
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
      rgba(255,107,53,0.35),
      rgba(0,102,204,0.25)
    );
  }

  .stop-card {
    position: relative;
    background: rgba(255,255,255,0.84);
    backdrop-filter: blur(18px);
    border: 1.5px solid rgba(255,255,255,0.6);
    border-radius: 30px;
    padding: 34px;
    box-shadow: 0 18px 50px rgba(15,14,23,0.08);
    transition: all 0.22s ease;
  }

  .stop-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 28px 70px rgba(15,14,23,0.12);
  }

  .stop-dot {
    position: absolute;
    left: -40px;
    top: 40px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), #ff9f7a);
    border: 5px solid var(--paper);
    box-shadow: 0 0 0 4px rgba(255,107,53,0.14);
  }

  .stop-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 24px;
  }

  .city-block {}

  .city-name {
    font-family: 'Syne', sans-serif;
    font-size: 38px;
    font-weight: 800;
    letter-spacing: -0.04em;
    margin: 0;
    line-height: 1;
  }

  .trip-date {
    margin-top: 10px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(0,102,204,0.08);
    color: var(--accent2);
    font-size: 13px;
    font-weight: 600;
  }

  .delete-btn {
    border: none;
    background: rgba(220,38,38,0.08);
    color: var(--danger);
    padding: 12px 18px;
    border-radius: 14px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.18s ease;
  }

  .delete-btn:hover {
    background: var(--danger);
    color: white;
  }

  .activity-box {
    background: linear-gradient(
      135deg,
      rgba(255,255,255,0.9),
      rgba(248,248,248,0.9)
    );
    border: 1px solid rgba(232,228,220,0.9);
    border-radius: 24px;
    padding: 24px;
  }

  .activity-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 12px;
  }

  .activity-text {
    font-size: 17px;
    line-height: 1.7;
    color: var(--ink);
    font-weight: 500;
  }

  /* RESPONSIVE */
  @media (max-width: 1200px) {
    .form-grid {
      grid-template-columns: 1fr 1fr;
    }

    .add-btn {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .builder-container {
      padding: 38px 22px 70px;
    }

    .title {
      font-size: 52px;
      line-height: 1;
    }

    .subtitle {
      font-size: 15px;
    }

    .form-card {
      padding: 26px;
      border-radius: 28px;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }

    .timeline {
      padding-left: 26px;
    }

    .stop-dot {
      left: -26px;
    }

    .stop-card {
      padding: 24px;
    }

    .stop-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .city-name {
      font-size: 30px;
    }
  }
`;

function ItineraryBuilder() {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activity, setActivity] = useState("");

  const [stops, setStops] = useState([]);

  const addStop = () => {
    if (
      city === "" ||
      startDate === "" ||
      endDate === "" ||
      activity === ""
    ) {
      return;
    }

    const newStop = {
      city,
      startDate,
      endDate,
      activity
    };

    setStops([...stops, newStop]);

    setCity("");
    setStartDate("");
    setEndDate("");
    setActivity("");
  };

  const deleteStop = (index) => {
    const updatedStops = stops.filter(
      (_, i) => i !== index
    );

    setStops(updatedStops);
  };

  return (
    <>
      <style>{styles}</style>

      <div className="builder-root">
        <div className="builder-container">

          {/* HEADER */}
          <div className="header">

            <div className="eyebrow">
              ✦ Multi-City Planner
            </div>

            <h1 className="title">
              Build your perfect <span>journey.</span>
            </h1>

            <p className="subtitle">
              Design seamless travel experiences with a cinematic itinerary
              timeline, personalized activities, and elegant trip organization.
            </p>

          </div>

          {/* FORM */}
          <div className="form-card">

            <div className="form-grid">

              <div className="field-group">
                <label className="field-label">
                  City
                </label>

                <input
                  type="text"
                  placeholder="Enter destination"
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  className="field-input"
                />
              </div>

              <div className="field-group">
                <label className="field-label">
                  Start Date
                </label>

                <input
                  type="date"
                  value={startDate}
                  onChange={(e) =>
                    setStartDate(e.target.value)
                  }
                  className="field-input"
                />
              </div>

              <div className="field-group">
                <label className="field-label">
                  End Date
                </label>

                <input
                  type="date"
                  value={endDate}
                  onChange={(e) =>
                    setEndDate(e.target.value)
                  }
                  className="field-input"
                />
              </div>

              <div className="field-group">
                <label className="field-label">
                  Activity
                </label>

                <input
                  type="text"
                  placeholder="Add an experience"
                  value={activity}
                  onChange={(e) =>
                    setActivity(e.target.value)
                  }
                  className="field-input"
                />
              </div>

              <button
                onClick={addStop}
                className="add-btn"
              >
                + Add Stop
              </button>

            </div>

          </div>

          {/* SECTION */}
          <div className="section-head">
            <h2 className="section-title">
              Trip Timeline
            </h2>

            <div className="section-line" />
          </div>

          {/* EMPTY */}
          {stops.length === 0 ? (

            <div className="empty-box">

              <div className="empty-icon">
                ✈️
              </div>

              <div className="empty-text">
                Start adding destinations to build your travel story.
              </div>

            </div>

          ) : (

            <div className="timeline">

              {stops.map((stop, index) => (

                <div
                  key={index}
                  className="stop-card"
                >

                  <div className="stop-dot" />

                  <div className="stop-header">

                    <div className="city-block">

                      <h3 className="city-name">
                        {stop.city}
                      </h3>

                      <div className="trip-date">
                        📅 {stop.startDate} → {stop.endDate}
                      </div>

                    </div>

                    <button
                      onClick={() =>
                        deleteStop(index)
                      }
                      className="delete-btn"
                    >
                      Delete
                    </button>

                  </div>

                  <div className="activity-box">

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

          )}

        </div>
      </div>
    </>
  );
}

export default ItineraryBuilder;