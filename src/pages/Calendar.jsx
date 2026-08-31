import React from "react";
import WeeklyMoodReport from "../components/WeeklyMoodReport/WeeklyMoodReport";

function Calendar({ moodEntries }) {
  return (
    <section className="page">

      <WeeklyMoodReport
        moodEntries={moodEntries}
      />

    </section>
  );
}

export default Calendar;