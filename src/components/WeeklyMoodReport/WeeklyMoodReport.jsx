import React from "react";
import "./WeeklyMoodReport.css";

function WeeklyMoodReport({ moodEntries }) {
  const happyDays = moodEntries.filter(
    (entry) => entry.mood === "Happy"
  ).length;

  const unhappyDays = moodEntries.filter(
    (entry) => entry.mood === "Unhappy"
  ).length;

  const angryDays = moodEntries.filter(
    (entry) => entry.mood === "Angry"
  ).length;

  const anxiousDays = moodEntries.filter(
    (entry) => entry.mood === "Anxious/Stressed"
  ).length;

  const calmDays = moodEntries.filter(
    (entry) => entry.mood === "Calm"
  ).length;

  return (
    <section className="weekly-report">
      <h2>📊 Mood Report</h2>

      <div className="mood-chart">

        <div className="chart-item">
          <span>😊 Happy</span>

          <div className="bar-container">
            <div
              className="bar happy-bar"
              style={{ width: `${happyDays * 10}%` }}
            >
              {happyDays}
            </div>
          </div>
        </div>

        <div className="chart-item">
          <span>😢 Unhappy</span>

          <div className="bar-container">
            <div
              className="bar unhappy-bar"
              style={{ width: `${unhappyDays * 10}%` }}
            >
              {unhappyDays}
            </div>
          </div>
        </div>

        <div className="chart-item">
          <span>😠 Angry</span>

          <div className="bar-container">
            <div
              className="bar angry-bar"
              style={{ width: `${angryDays * 10}%` }}
            >
              {angryDays}
            </div>
          </div>
        </div>

        <div className="chart-item">
          <span>😰 Anxious/Stressed</span>

          <div className="bar-container">
            <div
              className="bar anxious-bar"
              style={{ width: `${anxiousDays * 10}%` }}
            >
              {anxiousDays}
            </div>
          </div>
        </div>

        <div className="chart-item">
          <span>😐 Calm</span>

          <div className="bar-container">
            <div
              className="bar calm-bar"
              style={{ width: `${calmDays * 10}%` }}
            >
              {calmDays}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WeeklyMoodReport;
