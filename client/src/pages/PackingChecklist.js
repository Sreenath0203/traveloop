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

.pack-root {
  min-height: 100vh;
  background: var(--paper);
  font-family: 'DM Sans', sans-serif;
  color: var(--ink);
  position: relative;
  overflow-x: hidden;
}

.pack-root::before {
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

.pack-root::after {
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

.pack-inner {
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
  gap: 24px;
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

/* FORM CARD */

.form-card {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 32px;
  padding: 34px;
  margin-bottom: 36px;
}

/* INPUTS */

.input-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-bottom: 30px;
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

/* BUTTON */

.generate-btn {
  border: none;
  background: linear-gradient(
    135deg,
    var(--accent),
    #ff8c61
  );
  color: white;
  padding: 18px 34px;
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

/* SECTION HEADER */

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

/* ITEMS */

.items-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.item-card {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 22px;
  padding: 22px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: 0.22s ease;
}

.item-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255,107,53,0.2);
  box-shadow: 0 14px 40px rgba(0,0,0,0.06);
}

.item-icon {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: rgba(255,107,53,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-size: 20px;
  flex-shrink: 0;
}

.item-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--ink);
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
  font-size: 52px;
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

/* RESPONSIVE */

@media (max-width: 900px) {

  .input-grid {
    grid-template-columns: 1fr;
  }

  .items-grid {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 44px;
  }
}

@media (max-width: 768px) {

  .pack-inner {
    padding: 28px 18px 60px;
  }

  .hero-card {
    padding: 34px 24px;
  }

  .hero-icon {
    width: 90px;
    height: 90px;
    font-size: 34px;
  }

  .hero-content h1 {
    font-size: 40px;
  }

  .form-card {
    padding: 24px;
  }

  .generate-btn {
    width: 100%;
  }
}
`;

function PackingChecklist() {

  const [destination, setDestination] = useState("");
  const [weather, setWeather] = useState("");
  const [days, setDays] = useState("");

  const [items, setItems] = useState([]);

  const generateChecklist = () => {

    let checklist = [
      "Phone Charger",
      "Wallet",
      "ID Proof",
      "Toothbrush",
      "Power Bank"
    ];

    if (weather === "Cold") {

      checklist.push(
        "Jacket",
        "Sweater",
        "Gloves",
        "Thermal Wear"
      );
    }

    if (weather === "Rainy") {

      checklist.push(
        "Umbrella",
        "Raincoat",
        "Waterproof Bag"
      );
    }

    if (weather === "Hot") {

      checklist.push(
        "Sunscreen",
        "Cap",
        "Sunglasses",
        "Water Bottle"
      );
    }

    if (days > 5) {

      checklist.push(
        "Extra Clothes",
        "Laundry Bag",
        "Travel Pillow"
      );
    }

    if (
      destination.toLowerCase().includes("beach")
    ) {

      checklist.push(
        "Flip Flops",
        "Swimwear"
      );
    }

    setItems(checklist);
  };

  return (
    <>
      <style>{styles}</style>

      <div className="pack-root">

        <div className="pack-inner">

          {/* HERO */}

          <div className="hero-card">

            <div className="hero-top">

              <div className="hero-left">

                <div className="hero-icon">
                  🧳
                </div>

                <div className="hero-content">

                  <h1>
                    Packing <span>Checklist</span>
                  </h1>

                  <div className="hero-sub">
                    Generate smart AI-powered travel essentials
                    based on your destination, weather, and
                    trip duration.
                  </div>

                  <div className="hero-badge">
                    ✨ Smart travel companion
                  </div>

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
                  value={destination}
                  onChange={(e) =>
                    setDestination(e.target.value)
                  }
                  className="input-field"
                />

              </div>

              <div className="input-group">

                <label className="input-label">
                  Weather
                </label>

                <select
                  value={weather}
                  onChange={(e) =>
                    setWeather(e.target.value)
                  }
                  className="input-field"
                >

                  <option value="">
                    Select Weather
                  </option>

                  <option value="Cold">
                    Cold
                  </option>

                  <option value="Rainy">
                    Rainy
                  </option>

                  <option value="Hot">
                    Hot
                  </option>

                </select>

              </div>

              <div className="input-group">

                <label className="input-label">
                  Trip Days
                </label>

                <input
                  type="number"
                  placeholder="Number of days"
                  value={days}
                  onChange={(e) =>
                    setDays(e.target.value)
                  }
                  className="input-field"
                />

              </div>

            </div>

            <button
              onClick={generateChecklist}
              className="generate-btn"
            >
              Generate Checklist
            </button>

          </div>

          {/* CHECKLIST */}

          <div className="section-header">

            <div className="section-title">
              Packing Items
            </div>

            <div className="section-line"></div>

          </div>

          {items.length === 0 ? (

            <div className="empty-box">

              <div className="empty-icon">
                ✈️
              </div>

              <div className="empty-title">
                No Checklist Generated
              </div>

              <div className="empty-text">
                Fill the travel details above and generate
                your personalized smart packing checklist.
              </div>

            </div>

          ) : (

            <div className="items-grid">

              {items.map((item, index) => (

                <div
                  key={index}
                  className="item-card"
                >

                  <div className="item-icon">
                    ✓
                  </div>

                  <div className="item-name">
                    {item}
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

export default PackingChecklist;