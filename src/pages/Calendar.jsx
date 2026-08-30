import React from "react";
import WeeklyMoodReport from "../components/WeeklyMoodReport/WeeklyMoodReport";

function Calendar({ moodEntries }) {
  return (
    <section className="page">

      <h1>📊 Mood Tracker</h1>

      <p>
        See your weekly mood summary and track how you have been feeling.
      </p>

      <WeeklyMoodReport
        moodEntries={moodEntries}
      />

    </section>
  );
}

export default Calendar;
