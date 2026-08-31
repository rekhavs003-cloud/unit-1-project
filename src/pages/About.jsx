import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-card">

        <h1>About Mood Tracker</h1>

        <p className="about-introduction">
          Mood Tracker is a beginner-friendly mood journal.It allows you to record how you feel each day and add information
          about your thoughts.
        </p>

        <div className="about-section">
          <h2>What can you do?</h2>

          <ul>
            <li>Add a daily mood entry.</li>
            <li>Write a short note.</li>
            <li>Edit an entry.</li>
            <li>Delete an entry.</li>
            <li>View entries on a calendar.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Why use it?</h2>

          <p>
            A simple journal can help you pause, reflect, and become more
            aware of your daily experiences.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
