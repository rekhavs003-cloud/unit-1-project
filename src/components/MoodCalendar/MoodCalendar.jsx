import React, { useState } from "react";
import "./MoodCalendar.css";

const moodInfo = {
  Happy: { name: "Happy", emoji: "😊" },
  Unhappy: { name: "Unhappy", emoji: "😢" },
  Angry: { name: "Angry", emoji: "😠" },
  "Anxious/Stressed": {
    name: "Anxious/Stressed",
    emoji: "😰"
  },
  Calm: { name: "Calm", emoji: "😐" }
};

function MoodCalendar({ moodEntries }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState("all");

  // Use only real mood entries from the user.
  const entries = moodEntries || [];

  // Filter entries based on the selected mood.
  const filteredEntries =
    selectedMood === "all"
      ? entries
      : entries.filter(
          (entry) => entry.mood === selectedMood
        );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", {
    month: "long"
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

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

  // Empty spaces before the first day of the month.
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(
      <div
        className="calendar-cell empty-cell"
        key={`empty-${i}`}
      ></div>
    );
  }

  // Create the calendar days.
  for (let day = 1; day <= daysInMonth; day++) {
    const entry = getEntryForDay(day);

    calendarDays.push(
      <div
        className={`calendar-cell ${
          entry ? "has-mood" : ""
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
            <option value="all">
              All moods
            </option>

            <option value="Happy">
              😊 Happy
            </option>

            <option value="Unhappy">
              😢 Unhappy
            </option>

            <option value="Angry">
              😠 Angry
            </option>

            <option value="Anxious/Stressed">
              😰 Anxious/Stressed
            </option>

            <option value="Calm">
              😐 Calm
            </option>
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

        <span>😊 Happy</span>
        <span>😢 Unhappy</span>
        <span>😠 Angry</span>
        <span>😰 Anxious/Stressed</span>
        <span>😐 Calm</span>

      </div>

    </section>
  );
}

export default MoodCalendar;
