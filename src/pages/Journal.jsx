import React, { useState } from "react";

import MoodForm from "../components/MoodForm/MoodForm";
import MoodList from "../components/MoodList/MoodList";
import MoodCalendar from "../components/MoodCalendar/MoodCalendar";

function Journal({
  moodEntries,
  addMoodEntry,
  deleteMoodEntry,
  updateMoodEntry
}) {
  const [editingEntry, setEditingEntry] = useState(null);

  function startEditing(entry) {
    setEditingEntry(entry);
  }

  function cancelEdit() {
    setEditingEntry(null);
  }

  function handleUpdate(updatedEntry) {
    updateMoodEntry(updatedEntry);
    setEditingEntry(null);
  }

  return (
    <section className="page">
      <h1>My Mood Journal 🌱</h1>

      <p>
        Record how you feel and what your day was like.
      </p>

      <div className="journal-layout">

        {/* LEFT SIDE - MOOD FORM */}
        <div className="journal-form-column">
          <MoodForm
            addMoodEntry={addMoodEntry}
            editingEntry={editingEntry}
            updateMoodEntry={handleUpdate}
            cancelEdit={cancelEdit}
          />
        </div>

        {/* RIGHT SIDE - CALENDAR AND NOTES */}
        <div className="journal-right-column">

          {/* Calendar */}
          <div className="journal-calendar">
            <h2>Mood Calendar</h2>

            <MoodCalendar
              moodEntries={moodEntries}
            />
          </div>

          {/* Notes / Saved Entries */}
          <div className="journal-notes">
            <MoodList
              moodEntries={moodEntries}
              onDelete={deleteMoodEntry}
              onEdit={startEditing}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Journal;