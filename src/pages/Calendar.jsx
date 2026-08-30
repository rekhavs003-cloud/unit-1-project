import React from "react";
import MoodCalendar from "../components/MoodCalendar/MoodCalendar";
import WeeklyMoodReport from "../components/WeeklyMoodReport/WeeklyMoodReport";

function Calendar({ moodEntries }) {
  return (
    <section className="page">
      <h1>Mood Calendar</h1>

      <p>
        Look at your mood entries and see how your days have been going.
      </p>

      <MoodCalendar moodEntries={moodEntries} />

      <WeeklyMoodReport moodEntries={moodEntries} />
    </section>
  );
}

export default Calendar;