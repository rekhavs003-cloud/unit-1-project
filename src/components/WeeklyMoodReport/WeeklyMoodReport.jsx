import React from "react";
import "./WeeklyMoodReport.css";

function WeeklyMoodReport({ moodEntries = [] }) {
  const today = new Date();

  // Find the first day of this week.
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  startOfWeek.setHours(0, 0, 0, 0);

  // Find the first day of next week.
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);

  // Our five moods.
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

  // Start all mood counts at zero.
  const moodCounts = {
    Happy: 0,
    Unhappy: 0,
    Angry: 0,
    "Anxious/Stressed": 0,
    Calm: 0
  };

  // Look at every saved mood entry.
  moodEntries.forEach((entry) => {
    if (!entry.date || !entry.mood) {
      return;
    }

    const entryDate = new Date(
      entry.date + "T00:00:00"
    );

    // Only count entries from this week.
    if (
      entryDate >= startOfWeek &&
      entryDate < endOfWeek
    ) {
      if (moodCounts[entry.mood] !== undefined) {
        moodCounts[entry.mood]++;
      }
    }
  });

  // Find the largest number.
  const largestCount = Math.max(
    ...Object.values(moodCounts),
    1
  );

  // Create the message underneath the chart.
  function getWeeklyNote() {
    const happyDays = moodCounts.Happy;

    const totalEntries = Object.values(
      moodCounts
    ).reduce((total, number) => total + number, 0);

    if (totalEntries === 0) {
      return "🌱 No mood entries yet this week. Start recording your mood to see your weekly report.";
    }

    if (happyDays >= 3) {
      return "🌟 Great week! You had 3 or more happy days. Keep enjoying those positive moments!";
    }

    if (happyDays === 1) {
      return "💛 You had one happy day this week. Be gentle with yourself. Drink water, eat nourishing food, get some movement, and make time for rest.";
    }

    if (happyDays === 0) {
      return "💛 This week may have been difficult. Take care of yourself with good food, water, gentle movement, and enough rest.";
    }

    return "🌱 Keep checking in with yourself. Every mood is worth noticing.";
  }

  return (
    <section className="weekly-report">

      <h2>📊 Weekly Mood Report</h2>

      <p className="report-introduction">
        Your mood summary for this week
      </p>

      <div className="mood-chart">

        {moods.map((mood) => {
          const count = moodCounts[mood.name];

          const barWidth =
            (count / largestCount) * 100;

          return (
            <div
              className="chart-row"
              key={mood.name}
            >

              <div className="chart-label">
                <span>
                  {mood.emoji} {mood.name}
                </span>

                <strong>{count}</strong>
              </div>

              <div className="bar-background">

                <div
                  className={`mood-bar ${mood.className}`}
                  style={{
                    width: `${barWidth}%`
                  }}
                ></div>

              </div>

            </div>
          );
        })}

      </div>

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

