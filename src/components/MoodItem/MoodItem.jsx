import React from "react";
import Button from "../Button/Button";
import "./MoodItem.css";

function MoodItem({ entry, onDelete, onEdit }) {
  const moodNames = {
    Happy: "😊 Happy",
    Unhappy: "😢 Unhappy",
    Angry: "😠 Angry",
    "Anxious/Stressed": "😰 Anxious/Stressed",
    Calm: "😐 Calm"
  };

  const energyIcons = {
    High: "🔋",
    Good: "🙂",
    Okay: "😐",
    Low: "😴",
    "Very Low": "🪫"
  };

  return (
    <article className="mood-item">
      <div className="mood-information">
        <h3>{moodNames[entry.mood]}</h3>

        <p>
          <strong>Date:</strong> {entry.date}
        </p>

        <p>
          <strong>Energy Level:</strong>{" "}
          {energyIcons[entry.energyLevel]} {entry.energyLevel}
        </p>

        <p>
          <strong>Note:</strong> {entry.note}
        </p>
      </div>

      <div className="item-buttons">
        <Button onClick={() => onEdit(entry)}>
          Edit
        </Button>

        <Button
          onClick={() => onDelete(entry.id)}
          className="delete-button"
        >
          Delete
        </Button>
      </div>
    </article>
  );
}

export default MoodItem;