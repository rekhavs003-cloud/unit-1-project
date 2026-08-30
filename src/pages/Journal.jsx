import React from "react";
import { useState } from "react";

import MoodForm from "../components/MoodForm/MoodForm";
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
    <section className="page">
      <h1>My Mood Journal 🌱</h1>

      <p>Record how you feel and what your day was like.</p>

      <MoodForm
        addMoodEntry={addMoodEntry}
        editingEntry={editingEntry}
        updateMoodEntry={handleUpdate}
        cancelEdit={cancelEdit}
      />

      <MoodList
        moodEntries={moodEntries}
        onDelete={deleteMoodEntry}
        onEdit={startEditing}
      />

      
    </section>
  );
}

export default Journal;