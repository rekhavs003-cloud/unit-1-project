import React, { useState } from "react";

import MoodForm from "../components/MoodForm/MoodForm";
import MoodCalendar from "../components/MoodCalendar/MoodCalendar";
import MoodList from "../components/MoodList/MoodList";

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
    <section className="journal-page">

      <h1>My Mood Journal 🌱</h1>

      <p className="journal-introduction">
        Record how you feel and what your day was like.
      </p>


      {/* Today's Mood + Calendar */}

      <div className="journal-top-section">

        <div className="journal-mood-section">
          <MoodForm
            addMoodEntry={addMoodEntry}
            editingEntry={editingEntry}
            updateMoodEntry={handleUpdate}
            cancelEdit={cancelEdit}
          />
        </div>


        <div className="journal-calendar-section">
          <MoodCalendar
            moodEntries={moodEntries}
          />
        </div>

      </div>


      {/* Journal Entries */}

      <div className="journal-entries-section">

        <MoodList
          moodEntries={moodEntries}
          onDelete={deleteMoodEntry}
          onEdit={startEditing}
        />

      </div>

    </section>
  );
}

export default Journal;
