import { useEffect, useState } from "react";
import axios from "axios";

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
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--paper);
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
    top: -240px;
    right: -240px;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .itinerary-root::after {
    content: '';
    position: fixed;
    bottom: -200px;
    left: -200px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .itinerary-container {
    position: relative;
    z-index: 1;
    max-width: 1480px;
    margin: 0 auto;
    padding: 56px 48px 80px;
  }

  /* HEADER */
  .header {
    margin-bottom: 52px;
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
    font-size: 76px;
    line-height: 0.94;
    letter-spacing: -0.05em;
    margin: 0;
    font-weight: 800;
    max-width: 860px;
  }

  .title span {
    color: var(--accent);
  }

  .subtitle {
    margin-top: 18px;
    font-size: 17px;
    color: var(--muted);
    max-width: 720px;
    line-height: 1.7;
    font-weight: 300;
  }

  /* FORM CARD */
  .form-card {
    background: rgba(255,255,255,0.84);
    backdrop-filter: blur(16px);
    border: 1.5px solid rgba(255,255,255,0.6);
    border-radius: 34px;
    padding: 38px;
    box-shadow: 0 24px 80px rgba(15,14,23,0.08);
    margin-bottom: 58px;
  }

  .form-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 32px;
  }

  .form-title {
    font-family: 'Syne', sans-serif;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0;
  }

  .form-sub {
    margin-top: 10px;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.6;
  }

  .form-badge {
    background: rgba(0,102,204,0.08);
    color: var(--accent2);
    padding: 10px 18px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
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

  .submit-btn {
    margin-top: 30px;
    width: 100%;
    height: 64px;
    border: none;
    border-radius: 20px;
    background: var(--ink);
    color: white;
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .submit-btn:hover {
    background: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(255,107,53,0.24);
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

  /* TIMELINE */
  .timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding-left: 42px;
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
    backdrop-filter: blur(16px);
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

  .timeline-dot {
    position: absolute;
    left: -42px;
    top: 38px;
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
    margin-bottom: 26px;
  }

  .city-name {
    font-family: 'Syne', sans-serif;
    font-size: 38px;
    font-weight: 800;
    letter-spacing: -0.04em;
    margin: 0;
    line-height: 1;
  }

  .country {
    margin-top: 12px;
    color: var(--muted);
    font-size: 15px;
    letter-spacing: 0.02em;
  }

  .trip-tag {
    background: rgba(255,107,53,0.08);
    color: var(--accent);
    padding: 10px 16px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .dates-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .date-box {
    background: rgba(248,248,248,0.92);
    border: 1px solid rgba(232,228,220,0.9);
    border-radius: 22px;
    padding: 22px;
  }

  .date-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 12px;
  }

  .date-value {
    font-size: 17px;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.5;
  }

  /* EMPTY */
  .empty-box {
    background: rgba(255,255,255,0.78);
    backdrop-filter: blur(14px);
    border: 2px dashed var(--border);
    border-radius: 30px;
    padding: 80px 30px;
    text-align: center;
  }

  .empty-icon {
    font-size: 58px;
    margin-bottom: 18px;
  }

  .empty-text {
    font-size: 18px;
    color: var(--muted);
    font-weight: 300;
  }

  /* RESPONSIVE */
  @media (max-width: 992px) {
    .form-grid {
      grid-template-columns: 1fr;
    }

    .dates-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .itinerary-container {
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

    .form-head {
      flex-direction: column;
      align-items: flex-start;
    }

    .timeline {
      padding-left: 28px;
    }

    .timeline-dot {
      left: -28px;
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

function Itinerary() {

    const [stops, setStops] = useState([]);

    const [formData, setFormData] = useState({
        trip_id: "",
        city_id: "",
        arrival_date: "",
        departure_date: ""
    });

    // Fetch Stops
    const fetchStops = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/itinerary"
            );

            setStops(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {
        fetchStops();
    }, []);

    // Handle Change
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Submit Stop
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:5000/api/itinerary/add",
                formData
            );

            alert("Stop Added Successfully");

            fetchStops();

        } catch (error) {

            console.log(error);

            alert("Failed to add stop");
        }
    };

    return (
        <>
            <style>{styles}</style>

            <div className="itinerary-root">

                <div className="itinerary-container">

                    {/* HEADER */}
                    <div className="header">

                        <div className="eyebrow">
                            ✦ Smart Route Planner
                        </div>

                        <h1 className="title">
                            Build seamless <span>travel timelines.</span>
                        </h1>

                        <p className="subtitle">
                            Organize your multi-city adventures with elegant trip
                            scheduling, destination planning, and beautifully
                            structured travel timelines.
                        </p>

                    </div>

                    {/* FORM */}
                    <div className="form-card">

                        <div className="form-head">

                            <div>

                                <h2 className="form-title">
                                    Add Travel Stop
                                </h2>

                                <p className="form-sub">
                                    Add destinations, travel dates, and organize your journey.
                                </p>

                            </div>

                            <div className="form-badge">
                                New Destination
                            </div>

                        </div>

                        <form
                            onSubmit={handleSubmit}
                        >

                            <div className="form-grid">

                                <div className="field-group">

                                    <label className="field-label">
                                        Trip ID
                                    </label>

                                    <input
                                        type="number"
                                        name="trip_id"
                                        placeholder="Enter Trip ID"
                                        onChange={handleChange}
                                        className="field-input"
                                        required
                                    />

                                </div>

                                <div className="field-group">

                                    <label className="field-label">
                                        City ID
                                    </label>

                                    <input
                                        type="number"
                                        name="city_id"
                                        placeholder="Enter City ID"
                                        onChange={handleChange}
                                        className="field-input"
                                        required
                                    />

                                </div>

                                <div className="field-group">

                                    <label className="field-label">
                                        Arrival Date
                                    </label>

                                    <input
                                        type="date"
                                        name="arrival_date"
                                        onChange={handleChange}
                                        className="field-input"
                                        required
                                    />

                                </div>

                                <div className="field-group">

                                    <label className="field-label">
                                        Departure Date
                                    </label>

                                    <input
                                        type="date"
                                        name="departure_date"
                                        onChange={handleChange}
                                        className="field-input"
                                        required
                                    />

                                </div>

                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                            >
                                + Add Stop To Timeline
                            </button>

                        </form>

                    </div>

                    {/* TIMELINE */}
                    <div className="section-head">

                        <h2 className="section-title">
                            Travel Timeline
                        </h2>

                        <div className="section-line" />

                    </div>

                    {stops.length === 0 ? (

                        <div className="empty-box">

                            <div className="empty-icon">
                                🌍
                            </div>

                            <div className="empty-text">
                                No travel stops added yet. Start planning your next adventure.
                            </div>

                        </div>

                    ) : (

                        <div className="timeline">

                            {stops.map((stop) => (

                                <div
                                    key={stop.id}
                                    className="stop-card"
                                >

                                    <div className="timeline-dot" />

                                    <div className="stop-header">

                                        <div>

                                            <h3 className="city-name">
                                                {stop.city_name}
                                            </h3>

                                            <p className="country">
                                                {stop.country}
                                            </p>

                                        </div>

                                        <div className="trip-tag">
                                            Destination Stop
                                        </div>

                                    </div>

                                    <div className="dates-grid">

                                        <div className="date-box">

                                            <div className="date-label">
                                                Arrival
                                            </div>

                                            <div className="date-value">
                                                {stop.arrival_date?.split("T")[0]}
                                            </div>

                                        </div>

                                        <div className="date-box">

                                            <div className="date-label">
                                                Departure
                                            </div>

                                            <div className="date-value">
                                                {stop.departure_date?.split("T")[0]}
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

export default Itinerary;