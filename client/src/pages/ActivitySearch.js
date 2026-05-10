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
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--paper);
  }

  .activity-root {
    min-height: 100vh;
    background: var(--paper);
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    position: relative;
    overflow-x: hidden;
  }

  .activity-root::before {
    content: '';
    position: fixed;
    top: -220px;
    right: -220px;
    width: 620px;
    height: 620px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%);
    z-index: 0;
  }

  .activity-root::after {
    content: '';
    position: fixed;
    bottom: -180px;
    left: -180px;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,102,204,0.06) 0%, transparent 70%);
    z-index: 0;
  }

  .activity-inner {
    position: relative;
    z-index: 1;
    max-width: 1440px;
    margin: 0 auto;
    padding: 56px 44px 80px;
  }

  /* HERO */
  .hero {
    margin-bottom: 48px;
  }

  .hero-tag {
    display: inline-block;
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255,107,53,0.28);
    background: rgba(255,107,53,0.05);
    color: var(--accent);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: 72px;
    line-height: 0.94;
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
    max-width: 720px;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.7;
  }

  /* SEARCH BAR */
  .search-panel {
    background: rgba(255,255,255,0.92);
    border: 1.5px solid var(--border);
    border-radius: 32px;
    padding: 34px;
    margin-bottom: 56px;
    backdrop-filter: blur(10px);
    box-shadow: 0 14px 50px rgba(0,0,0,0.06);
  }

  .search-grid {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 18px;
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

  /* SECTION */
  .section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
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

  /* GRID */
  .activities-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  /* CARD */
  .activity-card {
    background: var(--card-bg);
    border: 1.5px solid var(--border);
    border-radius: 28px;
    overflow: hidden;
    transition: all 0.24s ease;
    position: relative;
  }

  .activity-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255,107,53,0.2);
    box-shadow: 0 18px 55px rgba(0,0,0,0.09);
  }

  .activity-image-wrapper {
    height: 240px;
    overflow: hidden;
    position: relative;
  }

  .activity-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .activity-card:hover .activity-image {
    transform: scale(1.06);
  }

  .activity-badge {
    position: absolute;
    top: 18px;
    left: 18px;
    background: rgba(15,14,23,0.85);
    color: #fff;
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    backdrop-filter: blur(8px);
  }

  .activity-body {
    padding: 28px;
  }

  .activity-name {
    font-family: 'Syne', sans-serif;
    font-size: 30px;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0;
    color: var(--ink);
  }

  .activity-type {
    margin-top: 10px;
    color: var(--muted);
    font-size: 15px;
  }

  .activity-meta {
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

  .add-btn {
    width: 100%;
    margin-top: 26px;
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

  .add-btn:hover {
    background: var(--accent);
    transform: translateY(-1px);
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
    font-size: 56px;
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
  @media (max-width: 1180px) {
    .activities-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 900px) {
    .search-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .activity-inner {
      padding: 36px 20px 60px;
    }

    .hero-title {
      font-size: 52px;
    }

    .activities-grid {
      grid-template-columns: 1fr;
    }

    .search-panel {
      padding: 24px;
    }
  }
`;

function ActivitySearch() {

    const activitiesData = [
        {
            name: "Beach Surfing",
            type: "Adventure",
            cost: 2500,
            duration: "3 Hours",
            image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        },

        {
            name: "Food Tour",
            type: "Food",
            cost: 1200,
            duration: "2 Hours",
            image:
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        },

        {
            name: "Temple Visit",
            type: "Culture",
            cost: 500,
            duration: "1 Hour",
            image:
                "https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
        },

        {
            name: "Mountain Trekking",
            type: "Adventure",
            cost: 3000,
            duration: "5 Hours",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        }
    ];

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredActivities = activitiesData.filter(
        (activity) => {

            const matchesSearch =
                activity.name
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesFilter =
                filter === "All" ||
                activity.type === filter;

            return matchesSearch && matchesFilter;
        }
    );

    return (
        <>
            <style>{styles}</style>

            <div className="activity-root">

                <div className="activity-inner">

                    {/* HERO */}
                    <div className="hero">

                        <div className="hero-tag">
                            Smart Experience Discovery
                        </div>

                        <h1 className="hero-title">
                            Activity <span>Search</span>
                        </h1>

                        <p className="hero-sub">
                            Discover unforgettable travel experiences,
                            adventures, cultural activities, and local moments
                            tailored for your journey.
                        </p>

                    </div>

                    {/* SEARCH PANEL */}
                    <div className="search-panel">

                        <div className="search-grid">

                            <div className="field-group">

                                <label className="field-label">
                                    Search Activities
                                </label>

                                <input
                                    type="text"
                                    placeholder="Search activities..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
                                    className="field-input"
                                />

                            </div>

                            <div className="field-group">

                                <label className="field-label">
                                    Category
                                </label>

                                <select
                                    value={filter}
                                    onChange={(e) =>
                                        setFilter(e.target.value)
                                    }
                                    className="field-select"
                                >

                                    <option value="All">
                                        All Categories
                                    </option>

                                    <option value="Adventure">
                                        Adventure
                                    </option>

                                    <option value="Food">
                                        Food
                                    </option>

                                    <option value="Culture">
                                        Culture
                                    </option>

                                </select>

                            </div>

                        </div>

                    </div>

                    {/* SECTION */}
                    <div className="section-header">

                        <h2 className="section-title">
                            Available Experiences
                        </h2>

                        <div className="section-line"></div>

                    </div>

                    {/* GRID */}
                    <div className="activities-grid">

                        {filteredActivities.length === 0 ? (

                            <div className="empty-state">

                                <div className="empty-icon">
                                    🎯
                                </div>

                                <div className="empty-title">
                                    No activities found
                                </div>

                                <p className="empty-text">
                                    Try changing your search or category filter
                                    to discover more experiences.
                                </p>

                            </div>

                        ) : (

                            filteredActivities.map(
                                (activity, index) => (

                                    <div
                                        key={index}
                                        className="activity-card"
                                    >

                                        {/* IMAGE */}
                                        <div className="activity-image-wrapper">

                                            <img
                                                src={activity.image}
                                                alt={activity.name}
                                                className="activity-image"
                                            />

                                            <div className="activity-badge">
                                                {activity.type}
                                            </div>

                                        </div>

                                        {/* BODY */}
                                        <div className="activity-body">

                                            <h2 className="activity-name">
                                                {activity.name}
                                            </h2>

                                            <p className="activity-type">
                                                Curated travel experience
                                            </p>

                                            <div className="activity-meta">

                                                <div className="meta-card">

                                                    <div className="meta-label">
                                                        Estimated Cost
                                                    </div>

                                                    <div className="meta-value">
                                                        ₹ {activity.cost}
                                                    </div>

                                                </div>

                                                <div className="meta-card">

                                                    <div className="meta-label">
                                                        Duration
                                                    </div>

                                                    <div className="meta-value">
                                                        ⏱ {activity.duration}
                                                    </div>

                                                </div>

                                            </div>

                                            <button className="add-btn">
                                                + Add To Trip
                                            </button>

                                        </div>

                                    </div>

                                )
                            )

                        )}

                    </div>

                </div>

            </div>
        </>
    );
}

export default ActivitySearch;