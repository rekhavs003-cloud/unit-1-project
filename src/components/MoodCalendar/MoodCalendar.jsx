import React, { useState } from "react";
import "./MoodCalendar.css";

const moodInfo = {
  1: { name: "Very Sad", emoji: "😢" },
  2: { name: "Sad", emoji: "😞" },
  3: { name: "Okay", emoji: "😐" },
  4: { name: "Happy", emoji: "😊" },
  5: { name: "Very Happy", emoji: "😍" }
};

// Mock data for testing the calendar
const mockMoodEntries = [
  { id: 1, date: "2026-08-03", mood: 4, weather: "Sunny" },
  { id: 2, date: "2026-08-06", mood: 5, weather: "Sunny" },
  { id: 3, date: "2026-08-10", mood: 3, weather: "Cloudy" },
  { id: 4, date: "2026-08-13", mood: 2, weather: "Rainy" },
  { id: 5, date: "2026-08-17", mood: 4, weather: "Sunny" },
  { id: 6, date: "2026-08-21", mood: 5, weather: "Clear" },
  { id: 7, date: "2026-08-25", mood: 3, weather: "Cloudy" }
];

function MoodCalendar({ moodEntries }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState("all");

  // Use real entries when they exist.
  // Otherwise use mock data.
  const entries =
    moodEntries && moodEntries.length > 0
      ? moodEntries
      : mockMoodEntries;

  const filteredEntries =
    selectedMood === "all"
      ? entries
      : entries.filter(
          (entry) => String(entry.mood) === String(selectedMood)
        );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", {
    month: "long"
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  function previousMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
  }

  function goToCurrentMonth() {
    setCurrentDate(new Date());
  }

  function getEntryForDay(day) {
    const monthNumber = String(month + 1).padStart(2, "0");
    const dayNumber = String(day).padStart(2, "0");

    const dateString = `${year}-${monthNumber}-${dayNumber}`;

    return filteredEntries.find(
      (entry) => entry.date === dateString
    );
  }

  const calendarDays = [];

  // Empty spaces before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(
      <div className="calendar-cell empty-cell" key={`empty-${i}`}></div>
    );
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const entry = getEntryForDay(day);

    calendarDays.push(
      <div
        className={`calendar-cell ${
          entry ? `mood-${entry.mood}` : ""
        }`}
        key={day}
      >
        <span className="day-number">{day}</span>

        {entry && (
          <div className="mood-display">
            <span className="mood-emoji">
              {moodInfo[entry.mood]?.emoji}
            </span>

            <span className="weather">
              {entry.weather}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="calendar-section">

      <div className="calendar-top">

        <div>
          <h2>🌿 Mood Calendar</h2>
          <p>Track your mood throughout the month.</p>
        </div>

        <div className="mood-filter">
          <label htmlFor="mood-filter">
            Filter:
          </label>

          <select
            id="mood-filter"
            value={selectedMood}
            onChange={(event) =>
              setSelectedMood(event.target.value)
            }
          >
            <option value="all">All moods</option>
            <option value="1">😢 Very Sad</option>
            <option value="2">😞 Sad</option>
            <option value="3">😐 Okay</option>
            <option value="4">😊 Happy</option>
            <option value="5">😍 Very Happy</option>
          </select>
        </div>

      </div>

      <div className="calendar-navigation">

        <button onClick={previousMonth}>
          ← Previous
        </button>

        <h1>
          {monthName} {year}
        </h1>

        <button onClick={nextMonth}>
          Next →
        </button>

      </div>

      <button
        className="today-button"
        onClick={goToCurrentMonth}
      >
        Today
      </button>

      <div className="calendar">

        <div className="weekday-row">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="calendar-grid">
          {calendarDays}
        </div>

      </div>

      <div className="mood-legend">

        <span>😢 Very Sad</span>
        <span>😞 Sad</span>
        <span>😐 Okay</span>
        <span>😊 Happy</span>
        <span>😍 Very Happy</span>

      </div>

    </section>
  );
}

export default MoodCalendar;