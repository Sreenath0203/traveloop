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

.notes-root {
  min-height: 100vh;
  background: var(--paper);
  font-family: 'DM Sans', sans-serif;
  color: var(--ink);
  position: relative;
  overflow-x: hidden;
}

.notes-root::before {
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

.notes-root::after {
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

.notes-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 56px;
}

/* TOP */

.top-bar {
  margin-bottom: 40px;
}

.back-link {
  color: var(--muted);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: 0.2s ease;
}

.back-link:hover {
  color: var(--accent);
}

/* HERO */

.notes-hero {
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(10px);
  border: 1.5px solid var(--border);
  border-radius: 36px;
  padding: 48px;
  margin-bottom: 36px;
  position: relative;
  overflow: hidden;
}

.notes-hero::before {
  content: '';
  position: absolute;
  top: -70px;
  right: -70px;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: rgba(255,107,53,0.08);
}

.notes-header {
  display: flex;
  align-items: center;
  gap: 28px;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
}

.notes-icon {
  width: 110px;
  height: 110px;
  border-radius: 30px;
  background: linear-gradient(135deg, #0f0e17 0%, #1f2937 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 44px;
  box-shadow: 0 14px 40px rgba(0,0,0,0.15);
}

.notes-info h1 {
  margin: 0;
  font-family: 'Syne', sans-serif;
  font-size: 56px;
  line-height: 0.95;
  letter-spacing: -0.05em;
}

.notes-info h1 span {
  color: var(--accent);
}

.notes-sub {
  margin-top: 16px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
  max-width: 650px;
}

/* GRID */

.notes-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  align-items: start;
}

@media (max-width: 1024px) {
  .notes-grid {
    grid-template-columns: 1fr;
  }
}

/* CARD */

.card {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 30px;
  padding: 34px;
  transition: 0.25s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 50px rgba(0,0,0,0.06);
}

/* TITLES */

.section-title {
  font-family: 'Syne', sans-serif;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
}

/* TEXTAREA */

.note-input {
  width: 100%;
  min-height: 220px;
  border: 1.5px solid var(--border);
  border-radius: 22px;
  padding: 22px;
  font-size: 15px;
  line-height: 1.8;
  resize: vertical;
  font-family: inherit;
  transition: 0.2s ease;
  background: #fff;
  color: var(--ink);
}

.note-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 5px rgba(255,107,53,0.08);
}

.note-input::placeholder {
  color: #aaa;
}

/* SAVE BUTTON */

.save-btn {
  margin-top: 20px;
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

/* NOTES LIST */

.notes-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* EMPTY STATE */

.empty-state {
  border: 2px dashed var(--border);
  border-radius: 24px;
  padding: 70px 30px;
  text-align: center;
  background: rgba(255,255,255,0.7);
}

.empty-icon {
  font-size: 52px;
  margin-bottom: 18px;
}

.empty-title {
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
}

.empty-text {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
}

/* NOTE CARD */

.note-card {
  background: linear-gradient(
    135deg,
    rgba(255,107,53,0.04),
    rgba(0,102,204,0.03)
  );
  border: 1.5px solid var(--border);
  border-radius: 24px;
  padding: 24px;
  transition: 0.2s ease;
}

.note-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255,107,53,0.2);
  box-shadow: 0 14px 40px rgba(0,0,0,0.05);
}

.note-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.note-text {
  font-size: 15px;
  line-height: 1.9;
  color: var(--ink);
  white-space: pre-wrap;
}

.note-time {
  margin-top: 18px;
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.04em;
}

.delete-btn {
  background: rgba(220,38,38,0.08);
  color: var(--danger);
  border: 1px solid rgba(220,38,38,0.15);
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
  flex-shrink: 0;
}

.delete-btn:hover {
  background: var(--danger);
  color: white;
}

/* RESPONSIVE */

@media (max-width: 768px) {

  .notes-inner {
    padding: 28px 18px 60px;
  }

  .notes-hero {
    padding: 34px 24px;
  }

  .notes-icon {
    width: 90px;
    height: 90px;
    font-size: 36px;
  }

  .notes-info h1 {
    font-size: 40px;
  }

  .card {
    padding: 24px;
  }

  .note-top {
    flex-direction: column;
  }

  .delete-btn {
    width: 100%;
  }
}
`;

function TripNotes() {

  const [note, setNote] = useState("");

  const [notes, setNotes] = useState([]);

  // Add Note
  const addNote = () => {

    if (note.trim() === "") return;

    const newNote = {
      text: note,
      timestamp: new Date().toLocaleString()
    };

    setNotes([newNote, ...notes]);

    setNote("");
  };

  // Delete Note
  const deleteNote = (index) => {

    const updatedNotes = notes.filter(
      (_, i) => i !== index
    );

    setNotes(updatedNotes);
  };

  return (
    <>
      <style>{styles}</style>

      <div className="notes-root">

        <div className="notes-inner">

          {/* TOP */}

          <div className="top-bar">

            <a href="/" className="back-link">
              ← Back to Dashboard
            </a>

          </div>

          {/* HERO */}

          <div className="notes-hero">

            <div className="notes-header">

              <div className="notes-icon">
                📝
              </div>

              <div className="notes-info">

                <h1>
                  Trip <span>Journal</span>
                </h1>

                <div className="notes-sub">
                  Save reminders, memories, travel plans,
                  important details, and everything you want
                  to remember during your journey.
                </div>

              </div>

            </div>

          </div>

          {/* MAIN GRID */}

          <div className="notes-grid">

            {/* LEFT */}

            <div className="card">

              <div className="section-title">
                Create Note
              </div>

              <textarea
                rows="6"
                placeholder="Write your travel note here..."
                value={note}
                onChange={(e) =>
                  setNote(e.target.value)
                }
                className="note-input"
              />

              <button
                onClick={addNote}
                className="save-btn"
              >
                Save Note
              </button>

            </div>

            {/* RIGHT */}

            <div className="card">

              <div className="section-title">
                Saved Notes
              </div>

              <div className="notes-list">

                {notes.length === 0 ? (

                  <div className="empty-state">

                    <div className="empty-icon">
                      ✈
                    </div>

                    <div className="empty-title">
                      No Notes Yet
                    </div>

                    <div className="empty-text">
                      Start documenting your travel experiences,
                      plans, and important reminders.
                    </div>

                  </div>

                ) : (

                  notes.map((item, index) => (

                    <div
                      key={index}
                      className="note-card"
                    >

                      <div className="note-top">

                        <div>

                          <div className="note-text">
                            {item.text}
                          </div>

                          <div className="note-time">
                            {item.timestamp}
                          </div>

                        </div>

                        <button
                          onClick={() =>
                            deleteNote(index)
                          }
                          className="delete-btn"
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  ))

                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default TripNotes;