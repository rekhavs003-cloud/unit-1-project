import React from "react";
import MoodItem from "../MoodItem/MoodItem";
import "./MoodList.css";

function MoodList({ moodEntries, onDelete, onEdit }) {
  if (moodEntries.length === 0) {
    return (
      <section className="mood-list">
        <h2>Your Journal</h2>

        <div className="empty-message">
          <p>🌱 You don't have any mood entries yet.</p>
          <p>Add your first entry above!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mood-list">
      <h2>Your Journal</h2>

      {moodEntries
        .slice()
        .reverse()
        .map((entry) => (
          <MoodItem
            key={entry.id}
            entry={entry}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
    </section>
  );
}

export default MoodList;