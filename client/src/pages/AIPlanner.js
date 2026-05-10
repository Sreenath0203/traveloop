import { useState } from "react";
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

  .ai-root {
    min-height: 100vh;
    background: var(--paper);
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    position: relative;
    overflow-x: hidden;
  }

  .ai-root::before {
    content: '';
    position: fixed;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%);
    z-index: 0;
  }

  .ai-root::after {
    content: '';
    position: fixed;
    bottom: -180px;
    left: -180px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%);
    z-index: 0;
  }

  .ai-inner {
    position: relative;
    z-index: 1;
    max-width: 1380px;
    margin: 0 auto;
    padding: 56px 44px 80px;
  }

  /* HEADER */
  .hero {
    margin-bottom: 48px;
  }

  .hero-tag {
    display: inline-block;
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255,107,53,0.25);
    color: var(--accent);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 16px;
    background: rgba(255,107,53,0.04);
  }

  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: 72px;
    line-height: 0.95;
    letter-spacing: -0.05em;
    font-weight: 800;
    margin: 0;
    color: var(--ink);
  }

  .hero-title span {
    color: var(--accent);
  }

  .hero-sub {
    margin-top: 18px;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.7;
    max-width: 720px;
  }

  /* SEARCH PANEL */
  .search-panel {
    background: rgba(255,255,255,0.92);
    border: 1.5px solid var(--border);
    border-radius: 32px;
    padding: 34px;
    margin-bottom: 56px;
    backdrop-filter: blur(10px);
    box-shadow: 0 12px 50px rgba(0,0,0,0.06);
  }

  .search-grid {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 18px;
    align-items: end;
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

  .field-input,
  .field-select {
    width: 100%;
    background: #fff;
    border: 1.5px solid var(--border);
    border-radius: 18px;
    padding: 18px 20px;
    font-size: 15px;
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    outline: none;
    transition: all 0.18s ease;
  }

  .field-input:focus,
  .field-select:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(255,107,53,0.08);
  }

  .generate-btn {
    height: 58px;
    padding: 0 28px;
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

  .generate-btn:hover {
    background: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(255,107,53,0.22);
  }

  /* SECTION HEADER */
  .section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 30px;
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

  /* RESULTS GRID */
  .results-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  /* CITY CARD */
  .city-card {
    background: var(--card-bg);
    border: 1.5px solid var(--border);
    border-radius: 28px;
    overflow: hidden;
    transition: all 0.22s ease;
    position: relative;
  }

  .city-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255,107,53,0.2);
    box-shadow: 0 18px 50px rgba(0,0,0,0.09);
  }

  .city-banner {
    height: 180px;
    background: linear-gradient(
      135deg,
      #0f0e17 0%,
      #1a1a2e 45%,
      #16213e 100%
    );
    position: relative;
    overflow: hidden;
    padding: 28px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .city-banner::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 180px;
    height: 180px;
    background: rgba(255,107,53,0.16);
    border-radius: 50%;
  }

  .city-banner::after {
    content: '';
    position: absolute;
    bottom: -60px;
    left: 20px;
    width: 130px;
    height: 130px;
    background: rgba(0,102,204,0.14);
    border-radius: 50%;
  }

  .city-icon {
    font-size: 42px;
    position: relative;
    z-index: 1;
  }

  .city-tag {
    position: relative;
    z-index: 1;
    padding: 7px 14px;
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.72);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .city-body {
    padding: 28px;
  }

  .city-name {
    font-family: 'Syne', sans-serif;
    font-size: 30px;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0;
    color: var(--ink);
  }

  .city-country {
    margin-top: 8px;
    color: var(--muted);
    font-size: 15px;
  }

  .city-meta {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .meta-card {
    background: #faf7f2;
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 16px 18px;
  }

  .meta-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 6px;
  }

  .meta-value {
    font-size: 16px;
    font-weight: 700;
    color: var(--ink);
  }

  .explore-btn {
    margin-top: 26px;
    width: 100%;
    border: none;
    border-radius: 16px;
    padding: 15px;
    background: var(--ink);
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    transition: all 0.18s ease;
  }

  .explore-btn:hover {
    background: var(--accent);
  }

  /* EMPTY */
  .empty-state {
    grid-column: 1 / -1;
    background: #fff;
    border: 2px dashed var(--border);
    border-radius: 28px;
    padding: 70px 40px;
    text-align: center;
  }

  .empty-icon {
    font-size: 54px;
    margin-bottom: 16px;
  }

  .empty-title {
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 12px;
  }

  .empty-text {
    color: var(--muted);
    font-size: 15px;
    line-height: 1.7;
  }

  /* RESPONSIVE */
  @media (max-width: 1100px) {
    .results-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .search-grid {
      grid-template-columns: 1fr;
    }

    .generate-btn {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .ai-inner {
      padding: 36px 20px 60px;
    }

    .hero-title {
      font-size: 52px;
    }

    .results-grid {
      grid-template-columns: 1fr;
    }

    .search-panel {
      padding: 24px;
    }
  }
`;

function AIPlanner() {

    const [budget, setBudget] = useState("");
    const [interest, setInterest] = useState("");

    const [results, setResults] = useState([]);

    const handleSearch = async () => {

        try {

            const response = await axios.get(
                `http://localhost:5000/api/ai?budget=${budget}&interest=${interest}`
            );

            setResults(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <>
            <style>{styles}</style>

            <div className="ai-root">

                <div className="ai-inner">

                    {/* HERO */}
                    <div className="hero">

                        <div className="hero-tag">
                            Smart Recommendation Engine
                        </div>

                        <h1 className="hero-title">
                            AI Trip <span>Planner</span>
                        </h1>

                        <p className="hero-sub">
                            Discover destinations tailored to your travel style,
                            budget, and interests with intelligent travel
                            recommendations powered by Traveloop AI.
                        </p>

                    </div>

                    {/* SEARCH PANEL */}
                    <div className="search-panel">

                        <div className="search-grid">

                            <div className="field-group">

                                <label className="field-label">
                                    Budget Range
                                </label>

                                <input
                                    type="number"
                                    placeholder="Enter your budget"
                                    onChange={(e) =>
                                        setBudget(e.target.value)
                                    }
                                    className="field-input"
                                />

                            </div>

                            <div className="field-group">

                                <label className="field-label">
                                    Travel Interest
                                </label>

                                <select
                                    onChange={(e) =>
                                        setInterest(e.target.value)
                                    }
                                    className="field-select"
                                >

                                    <option value="">
                                        Select Interest
                                    </option>

                                    <option value="Beach">
                                        Beach
                                    </option>

                                    <option value="Luxury">
                                        Luxury
                                    </option>

                                    <option value="Culture">
                                        Culture
                                    </option>

                                    <option value="Food">
                                        Food
                                    </option>

                                    <option value="History">
                                        History
                                    </option>

                                </select>

                            </div>

                            <button
                                onClick={handleSearch}
                                className="generate-btn"
                            >
                                ✨ Generate Plan
                            </button>

                        </div>

                    </div>

                    {/* RESULTS */}
                    <div className="section-header">

                        <h2 className="section-title">
                            Recommended Destinations
                        </h2>

                        <div className="section-line"></div>

                    </div>

                    <div className="results-grid">

                        {results.length === 0 ? (

                            <div className="empty-state">

                                <div className="empty-icon">
                                    🌍
                                </div>

                                <div className="empty-title">
                                    No recommendations yet
                                </div>

                                <p className="empty-text">
                                    Choose your travel budget and interests to
                                    generate AI-powered destination suggestions.
                                </p>

                            </div>

                        ) : (

                            results.map((city) => (

                                <div
                                    key={city.id}
                                    className="city-card"
                                >

                                    {/* Banner */}
                                    <div className="city-banner">

                                        <div className="city-icon">
                                            ✈️
                                        </div>

                                        <div className="city-tag">
                                            AI Pick
                                        </div>

                                    </div>

                                    {/* Body */}
                                    <div className="city-body">

                                        <h2 className="city-name">
                                            {city.city_name}
                                        </h2>

                                        <p className="city-country">
                                            {city.country}
                                        </p>

                                        <div className="city-meta">

                                            <div className="meta-card">

                                                <div className="meta-label">
                                                    Travel Style
                                                </div>

                                                <div className="meta-value">
                                                    {city.category}
                                                </div>

                                            </div>

                                            <div className="meta-card">

                                                <div className="meta-label">
                                                    Average Cost
                                                </div>

                                                <div className="meta-value">
                                                    ₹ {city.average_cost}
                                                </div>

                                            </div>

                                        </div>

                                        <button className="explore-btn">
                                            Explore Destination
                                        </button>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>

                </div>

            </div>
        </>
    );
}

export default AIPlanner;