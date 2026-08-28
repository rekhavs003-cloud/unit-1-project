import React from "react";
function About() {
  return (
    <section className="page">
      <div className="card">
        <h1>About Mood Tracker</h1>

        <p>
          Mood Tracker is a beginner-friendly mood and weather journal.
          It allows users to record how they feel each day and add
          information about the weather and their thoughts.
        </p>

        <h2>What can you do?</h2>

        <ul>
          <li>Add a daily mood entry.</li>
          <li>Choose the weather.</li>
          <li>Write a short note.</li>
          <li>Edit an entry.</li>
          <li>Delete an entry.</li>
          <li>View entries on a calendar.</li>
        </ul>

        <h2>Why use it?</h2>

        <p>
          A simple journal can help you pause, reflect, and become
          more aware of your daily experiences.
        </p>
      </div>
    </section>
  );
}

export default About;