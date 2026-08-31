import React, { useState } from "react";
import "./WeeklyMoodReport.css";

function WeeklyMoodReport({ moodEntries = [] }) {
  const [selectedWeek, setSelectedWeek] = useState("this");

  const moods = [
    {
      name: "Happy",
      emoji: "😊",
      className: "happy"
    },
    {
      name: "Unhappy",
      emoji: "😢",
      className: "unhappy"
    },
    {
      name: "Angry",
      emoji: "😠",
      className: "angry"
    },
    {
      name: "Anxious/Stressed",
      emoji: "😰",
      className: "anxious"
    },
    {
      name: "Calm",
      emoji: "😐",
      className: "calm"
    }
  ];

  const today = new Date();

  const currentWeekStart = new Date(today);
  currentWeekStart.setHours(0, 0, 0, 0);

  currentWeekStart.setDate(
    today.getDate() - today.getDay()
  );

  const selectedWeekStart = new Date(
    currentWeekStart
  );

  if (selectedWeek === "last") {
    selectedWeekStart.setDate(
      selectedWeekStart.getDate() - 7
    );
  }

  if (selectedWeek === "twoWeeksAgo") {
    selectedWeekStart.setDate(
      selectedWeekStart.getDate() - 14
    );
  }

  const selectedWeekEnd = new Date(
    selectedWeekStart
  );

  selectedWeekEnd.setDate(
    selectedWeekStart.getDate() + 7
  );

  const moodCounts = {
    Happy: 0,
    Unhappy: 0,
    Angry: 0,
    "Anxious/Stressed": 0,
    Calm: 0
  };

  moodEntries.forEach((entry) => {
    if (!entry.date || !entry.mood) {
      return;
    }

    const [year, month, day] =
      entry.date.split("-").map(Number);

    const entryDate = new Date(
      year,
      month - 1,
      day
    );

    if (
      entryDate >= selectedWeekStart &&
      entryDate < selectedWeekEnd
    ) {
      if (moodCounts[entry.mood] !== undefined) {
        moodCounts[entry.mood]++;
      }
    }
  });

  const largestCount = Math.max(
    ...Object.values(moodCounts),
    1
  );

  function getWeeklyNote() {
    const happyDays = moodCounts.Happy;

    const totalEntries = Object.values(
      moodCounts
    ).reduce(
      (total, number) => total + number,
      0
    );

    if (totalEntries === 0) {
      return "🌱 No mood entries for this week. Try recording your mood each day.";
    }

    if (happyDays >= 3) {
      return "🌟 Great week! You had 3 or more happy days. Keep enjoying those positive moments!";
    }

    if (happyDays === 2) {
      return "🌱 You had two happy days this week. Keep checking in with yourself!";
    }

    if (happyDays === 1) {
      return "💛 You had one happy day this week. Be gentle with yourself and make time for rest.";
    }

    return "💛 This week may have been difficult. Take care of yourself and keep checking in with your mood.";
  }

  return (
    <section className="weekly-report">

      {/* Report Heading */}
      <div className="report-heading">

        <h2>📊 Weekly Mood Report</h2>

        <p>
          Compare your mood for different weeks.
        </p>

      </div>


      {/* Week Filter */}
      <div className="week-filter">

        <label htmlFor="week">
          Choose a week:
        </label>

        <select
          id="week"
          value={selectedWeek}
          onChange={(event) =>
            setSelectedWeek(event.target.value)
          }
        >
          <option value="this">
            This Week
          </option>

          <option value="last">
            Last Week
          </option>

          <option value="twoWeeksAgo">
            2 Weeks Ago
          </option>
        </select>

      </div>


      {/* Bar Chart */}
      <div className="mood-chart">

        <div className="chart-bars">

          {moods.map((mood) => {

            const count =
              moodCounts[mood.name];

            const barHeight =
              (count / largestCount) * 100;

            return (
              <div
                className="chart-column"
                key={mood.name}
              >

                <div className="bar-area">

                  <strong className="bar-number">
                    {count}
                  </strong>

                  <div
                    className={`mood-bar ${mood.className}`}
                    style={{
                      height: `${barHeight}%`
                    }}
                  ></div>

                </div>

                <div className="chart-label">

                  <span className="chart-emoji">
                    {mood.emoji}
                  </span>

                  <span className="chart-mood-name">
                    {mood.name}
                  </span>

                </div>

              </div>
            );
          })}

        </div>

      </div>


      {/* Weekly Note */}
      <div className="weekly-note">

        <h3>💌 Your Weekly Note</h3>

        <p>
          {getWeeklyNote()}
        </p>

      </div>

    </section>
  );
}

export default WeeklyMoodReport;
