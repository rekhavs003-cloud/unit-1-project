import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page home-page">
      <div className="card">
        <h1>Welcome to Mood Tracker 🌿</h1>

        <p>
          Mood Tracker is a simple place to record your daily mood,
          weather, and thoughts.
        </p>

        <p>
          Keeping track of your feelings can help you notice patterns
          in your everyday life.
        </p>

        <Link to="/journal" className="home-button">
          Start Your Journal
        </Link>
      </div>

      <div className="home-grid">
        <div className="card">
          <h2>🌱 Record</h2>
          <p>Add your mood, weather, date, and a short note.</p>
        </div>

        <div className="card">
          <h2>🌤️ Notice</h2>
          <p>Look back at your entries and notice how your mood changes.</p>
        </div>

        <div className="card">
          <h2>🌼 Reflect</h2>
          <p>Use the calendar to see your mood journey.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;