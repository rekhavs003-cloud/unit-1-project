import React from "react";
import Button from "../Button/Button";
import "./MoodItem.css";

function MoodItem({ entry, onDelete, onEdit }) {
  const moodNames = {
    1: "Very Sad",
    2: "Sad",
    3: "Okay",
    4: "Happy",
    5: "Very Happy"
  };

  return (
    <article className={`mood-item mood-${entry.mood}`}>
      <div className="mood-information">
        <h3>{moodNames[entry.mood]}</h3>

        <p>
          <strong>Date:</strong> {entry.date}
        </p>

        <p>
          <strong>Weather:</strong> {entry.weather}
        </p>

        <p>
          <strong>Note:</strong> {entry.note}
        </p>
      </div>

      <div className="item-buttons">
        <Button onClick={() => onEdit(entry)}>Edit</Button>

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