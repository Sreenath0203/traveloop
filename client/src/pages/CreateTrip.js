import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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
    --success: #16a34a;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .create-root {
    min-height: 100vh;
    background: var(--paper);
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    position: relative;
    overflow-x: hidden;
  }

  .create-root::before {
    content: '';
    position: fixed;
    top: -180px;
    right: -180px;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .create-root::after {
    content: '';
    position: fixed;
    bottom: -150px;
    left: -150px;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,102,204,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .create-inner {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    padding: 48px 28px 70px;
  }

  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 42px;
    gap: 20px;
    flex-wrap: wrap;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: var(--muted);
    font-size: 14px;
    font-weight: 500;
    transition: 0.2s ease;
  }

  .back-link:hover {
    color: var(--accent);
  }

  .brand-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 100px;
    background: rgba(255,107,53,0.08);
    border: 1px solid rgba(255,107,53,0.18);
    color: var(--accent);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .hero {
    margin-bottom: 42px;
  }

  .hero-eyebrow {
    display: inline-block;
    margin-bottom: 12px;
    padding: 6px 14px;
    border-radius: 100px;
    background: rgba(0,102,204,0.06);
    border: 1px solid rgba(0,102,204,0.15);
    color: var(--accent2);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: 68px;
    line-height: 0.95;
    font-weight: 800;
    letter-spacing: -0.05em;
    margin: 0;
    color: var(--ink);
  }

  .hero-title span {
    color: var(--accent);
  }

  .hero-sub {
    margin-top: 18px;
    font-size: 16px;
    line-height: 1.8;
    color: var(--muted);
    max-width: 680px;
  }

  .form-card {
    background: var(--card-bg);
    border: 1.5px solid var(--border);
    border-radius: 34px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.06);
  }

  .form-banner {
    position: relative;
    overflow: hidden;
    padding: 34px 36px;
    background: linear-gradient(
      135deg,
      #0f0e17 0%,
      #17162b 55%,
      #1f2b4d 100%
    );
  }

  .form-banner::before {
    content: '';
    position: absolute;
    top: -60px;
    right: -40px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: rgba(255,107,53,0.14);
  }

  .form-banner::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: 40px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: rgba(0,102,204,0.12);
  }

  .banner-content {
    position: relative;
    z-index: 1;
  }

  .banner-label {
    display: inline-block;
    margin-bottom: 14px;
    padding: 6px 12px;
    border-radius: 100px;
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.7);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .banner-title {
    font-family: 'Syne', sans-serif;
    font-size: 36px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #fff;
    margin-bottom: 12px;
  }

  .banner-sub {
    color: rgba(255,255,255,0.7);
    font-size: 14px;
    line-height: 1.7;
    max-width: 520px;
  }

  .form-body {
    padding: 38px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .field-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .input,
  .textarea {
    width: 100%;
    border: 1.5px solid var(--border);
    border-radius: 18px;
    padding: 18px 20px;
    background: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: var(--ink);
    transition: all 0.2s ease;
    outline: none;
  }

  .input:focus,
  .textarea:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(255,107,53,0.08);
  }

  .textarea {
    min-height: 150px;
    resize: vertical;
    line-height: 1.7;
  }

  .dates-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }

  .helper-boxes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-top: 34px;
  }

  .helper-card {
    background: #faf7f2;
    border: 1px solid var(--border);
    border-radius: 22px;
    padding: 22px;
    transition: 0.2s ease;
  }

  .helper-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(0,0,0,0.06);
  }

  .helper-icon {
    font-size: 26px;
    margin-bottom: 14px;
  }

  .helper-title {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--ink);
  }

  .helper-text {
    font-size: 13px;
    line-height: 1.7;
    color: var(--muted);
  }

  .submit-wrap {
    margin-top: 40px;
  }

  .submit-btn {
    width: 100%;
    border: none;
    cursor: pointer;
    background: var(--ink);
    color: #fff;
    border-radius: 20px;
    padding: 20px;
    font-family: 'Syne', sans-serif;
    font-size: 17px;
    font-weight: 800;
    letter-spacing: -0.02em;
    transition: all 0.22s ease;
  }

  .submit-btn:hover {
    background: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(255,107,53,0.28);
  }

  @media (max-width: 768px) {

    .create-inner {
      padding: 30px 18px 60px;
    }

    .hero-title {
      font-size: 48px;
    }

    .form-body {
      padding: 24px;
    }

    .dates-grid,
    .helper-boxes {
      grid-template-columns: 1fr;
    }

    .banner-title {
      font-size: 28px;
    }
  }
`;

function CreateTrip() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        trip_name: "",
        description: "",
        start_date: "",
        end_date: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const user = JSON.parse(
                localStorage.getItem("user")
            );

            const tripData = {
                ...formData,
                user_id: user?.id || 1
            };

            await axios.post(
                "http://localhost:5000/api/trips/create",
                tripData
            );

            alert("Trip Created Successfully");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Failed to create trip");
        }
    };

    return (
        <>
            <style>{styles}</style>

            <div className="create-root">

                <div className="create-inner">

                    {/* Topbar */}
                    <div className="topbar">

                        <Link to="/" className="back-link">
                            ← Back to Dashboard
                        </Link>

                        <div className="brand-chip">
                            ✈ Traveloop Planner
                        </div>

                    </div>

                    {/* Hero */}
                    <div className="hero">

                        <div className="hero-eyebrow">
                            New Journey
                        </div>

                        <h1 className="hero-title">
                            Create Your
                            <br />
                            Next <span>Adventure</span>
                        </h1>

                        <p className="hero-sub">
                            Design a beautiful travel experience with destinations,
                            timelines, activities, and memories — all in one place.
                        </p>

                    </div>

                    {/* Card */}
                    <div className="form-card">

                        {/* Banner */}
                        <div className="form-banner">

                            <div className="banner-content">

                                <div className="banner-label">
                                    Smart Travel Planning
                                </div>

                                <div className="banner-title">
                                    Build Your Dream Trip
                                </div>

                                <div className="banner-sub">
                                    Add trip details, travel dates, and destination
                                    ideas to start planning smarter with Traveloop.
                                </div>

                            </div>

                        </div>

                        {/* Form */}
                        <div className="form-body">

                            <form onSubmit={handleSubmit}>

                                <div className="form-grid">

                                    {/* Trip Name */}
                                    <div className="field-group">

                                        <label className="field-label">
                                            Trip Name
                                        </label>

                                        <input
                                            type="text"
                                            name="trip_name"
                                            placeholder="Summer Escape to Ooty"
                                            onChange={handleChange}
                                            className="input"
                                            required
                                        />

                                    </div>

                                    {/* Description */}
                                    <div className="field-group">

                                        <label className="field-label">
                                            Trip Description
                                        </label>

                                        <textarea
                                            name="description"
                                            placeholder="Describe your travel goals, activities, places to visit, or experiences you want..."
                                            onChange={handleChange}
                                            className="textarea"
                                        />

                                    </div>

                                    {/* Dates */}
                                    <div className="dates-grid">

                                        <div className="field-group">

                                            <label className="field-label">
                                                Start Date
                                            </label>

                                            <input
                                                type="date"
                                                name="start_date"
                                                onChange={handleChange}
                                                className="input"
                                                required
                                            />

                                        </div>

                                        <div className="field-group">

                                            <label className="field-label">
                                                End Date
                                            </label>

                                            <input
                                                type="date"
                                                name="end_date"
                                                onChange={handleChange}
                                                className="input"
                                                required
                                            />

                                        </div>

                                    </div>

                                </div>

                                {/* Helper Cards */}
                                <div className="helper-boxes">

                                    <div className="helper-card">

                                        <div className="helper-icon">
                                            🌍
                                        </div>

                                        <div className="helper-title">
                                            Explore
                                        </div>

                                        <div className="helper-text">
                                            Discover multi-city travel experiences
                                            with smarter planning tools.
                                        </div>

                                    </div>

                                    <div className="helper-card">

                                        <div className="helper-icon">
                                            🗓
                                        </div>

                                        <div className="helper-title">
                                            Organize
                                        </div>

                                        <div className="helper-text">
                                            Manage your schedules, stops,
                                            activities, and timelines easily.
                                        </div>

                                    </div>

                                    <div className="helper-card">

                                        <div className="helper-icon">
                                            ✈
                                        </div>

                                        <div className="helper-title">
                                            Travel Better
                                        </div>

                                        <div className="helper-text">
                                            Keep everything beautifully structured
                                            for a seamless travel experience.
                                        </div>

                                    </div>

                                </div>

                                {/* Submit */}
                                <div className="submit-wrap">

                                    <button
                                        type="submit"
                                        className="submit-btn"
                                    >
                                        Save Trip & Continue →
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default CreateTrip;