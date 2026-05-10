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
  --danger: #dc2626;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.profile-root {
  min-height: 100vh;
  background: var(--paper);
  font-family: 'DM Sans', sans-serif;
  position: relative;
  overflow-x: hidden;
  color: var(--ink);
}

.profile-root::before {
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

.profile-root::after {
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

/* CONTAINER */

.profile-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 56px;
}

/* TOP BAR */

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
  flex-wrap: wrap;
}

.back-link {
  color: var(--muted);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: 0.2s;
}

.back-link:hover {
  color: var(--accent);
}

/* HERO */

.profile-hero {
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(10px);
  border: 1.5px solid var(--border);
  border-radius: 36px;
  padding: 50px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
}

.profile-hero::before {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(255,107,53,0.08);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.profile-avatar {
  width: 110px;
  height: 110px;
  border-radius: 28px;
  background: linear-gradient(135deg, #0f0e17 0%, #1f2937 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  font-size: 42px;
  font-weight: 800;
  color: white;
  box-shadow: 0 14px 40px rgba(0,0,0,0.15);
}

.profile-info h1 {
  margin: 0;
  font-family: 'Syne', sans-serif;
  font-size: 52px;
  line-height: 1;
  letter-spacing: -0.04em;
}

.profile-info h1 span {
  color: var(--accent);
}

.profile-sub {
  margin-top: 14px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
  max-width: 600px;
}

/* GRID */

.profile-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: 30px;
}

@media (max-width: 1024px) {
  .profile-grid {
    grid-template-columns: 1fr;
  }
}

/* CARD */

.card {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 30px;
  padding: 36px;
  transition: 0.25s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 50px rgba(0,0,0,0.06);
}

/* SECTION TITLE */

.section-title {
  font-family: 'Syne', sans-serif;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
}

/* FORM */

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--ink);
}

.input-field,
.select-field {
  width: 100%;
  border: 1.5px solid var(--border);
  background: #fff;
  padding: 16px 18px;
  border-radius: 16px;
  font-size: 14px;
  font-family: inherit;
  color: var(--ink);
  transition: 0.2s ease;
}

.input-field:focus,
.select-field:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 5px rgba(255,107,53,0.08);
}

/* SAVE BUTTON */

.save-btn {
  margin-top: 34px;
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
}

.save-btn:hover {
  background: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(255,107,53,0.22);
}

/* DESTINATIONS */

.destinations-grid {
  display: grid;
  gap: 14px;
}

.destination-card {
  background: linear-gradient(
    135deg,
    rgba(255,107,53,0.06),
    rgba(0,102,204,0.04)
  );
  border: 1.5px solid var(--border);
  border-radius: 20px;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: 0.2s ease;
}

.destination-card:hover {
  transform: translateX(4px);
  border-color: rgba(255,107,53,0.2);
}

.destination-icon {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.destination-name {
  font-size: 14px;
  font-weight: 600;
}

/* DANGER ZONE */

.danger-card {
  margin-top: 30px;
  background: rgba(220,38,38,0.03);
  border: 1.5px solid rgba(220,38,38,0.15);
}

.danger-title {
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: var(--danger);
  margin-bottom: 14px;
}

.danger-text {
  color: #7f1d1d;
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 24px;
}

.delete-btn {
  background: var(--danger);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

.delete-btn:hover {
  background: #991b1b;
  transform: translateY(-2px);
}

/* RESPONSIVE */

@media (max-width: 768px) {

  .profile-inner {
    padding: 28px 18px 60px;
  }

  .profile-hero {
    padding: 34px 24px;
  }

  .profile-avatar {
    width: 90px;
    height: 90px;
    font-size: 34px;
  }

  .profile-info h1 {
    font-size: 38px;
  }

  .card {
    padding: 26px;
  }
}
`;

function UserProfile() {

  const [name, setName] = useState("Mythili");

  const [email, setEmail] = useState(
    "mythili@email.com"
  );

  const [language, setLanguage] = useState(
    "English"
  );

  const savedDestinations = [
    "Ooty",
    "Goa",
    "Mysore",
    "Manali"
  ];

  const updateProfile = () => {

    alert("Profile Updated Successfully!");
  };

  const deleteAccount = () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (confirmDelete) {

      alert("Account Deleted");
    }
  };

  return (
    <>
      <style>{styles}</style>

      <div className="profile-root">

        <div className="profile-inner">

          {/* TOP */}

          <div className="top-bar">

            <a href="/" className="back-link">
              ← Back to Dashboard
            </a>

          </div>

          {/* HERO */}

          <div className="profile-hero">

            <div className="profile-header">

              <div className="profile-avatar">
                M
              </div>

              <div className="profile-info">

                <h1>
                  User <span>Profile</span>
                </h1>

                <div className="profile-sub">
                  Manage your personal information, language preferences,
                  saved destinations, and account settings in one place.
                </div>

              </div>

            </div>

          </div>

          {/* GRID */}

          <div className="profile-grid">

            {/* LEFT */}

            <div>

              {/* PROFILE FORM */}

              <div className="card">

                <div className="section-title">
                  Profile Settings
                </div>

                <div className="form-grid">

                  <div className="input-group">

                    <label>
                      Name
                    </label>

                    <input
                      type="text"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      className="input-field"
                    />

                  </div>

                  <div className="input-group">

                    <label>
                      Email
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      className="input-field"
                    />

                  </div>

                  <div className="input-group">

                    <label>
                      Language Preference
                    </label>

                    <select
                      value={language}
                      onChange={(e) =>
                        setLanguage(e.target.value)
                      }
                      className="select-field"
                    >

                      <option>
                        English
                      </option>

                      <option>
                        Tamil
                      </option>

                      <option>
                        Hindi
                      </option>

                    </select>

                  </div>

                </div>

                <button
                  onClick={updateProfile}
                  className="save-btn"
                >
                  Save Changes
                </button>

              </div>

              {/* DANGER ZONE */}

              <div className="card danger-card">

                <div className="danger-title">
                  Danger Zone
                </div>

                <div className="danger-text">
                  Deleting your account will permanently remove all your
                  trips, itineraries, notes, and saved preferences.
                </div>

                <button
                  onClick={deleteAccount}
                  className="delete-btn"
                >
                  Delete Account
                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="card">

                <div className="section-title">
                  Saved Destinations
                </div>

                <div className="destinations-grid">

                  {savedDestinations.map(
                    (destination, index) => (

                      <div
                        key={index}
                        className="destination-card"
                      >

                        <div className="destination-icon">
                          📍
                        </div>

                        <div className="destination-name">
                          {destination}
                        </div>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default UserProfile;