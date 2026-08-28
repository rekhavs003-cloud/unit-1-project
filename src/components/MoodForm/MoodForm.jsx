import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import "./MoodForm.css";

function MoodForm({
  addMoodEntry,
  editingEntry,
  updateMoodEntry,
  cancelEdit
}) {
  const [date, setDate] = useState(editingEntry?.date || "");
  const [mood, setMood] = useState(editingEntry?.mood || "");
  const [weather, setWeather] = useState(editingEntry?.weather || "");
  const [note, setNote] = useState(editingEntry?.note || "");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!date || !mood || !weather || !note.trim()) {
      setError("Please complete all fields.");
      return;
    }

    setError("");

    const moodEntry = {
      id: editingEntry ? editingEntry.id : Date.now(),
      date,
      mood,
      weather,
      note: note.trim()
    };

    if (editingEntry) {
      updateMoodEntry(moodEntry);
    } else {
      addMoodEntry(moodEntry);
    }

    setDate("");
    setMood("");
    setWeather("");
    setNote("");
  }

  return (
    <section className="mood-form-section">
      <h2>{editingEntry ? "Edit Mood Entry" : "Add Today's Mood"}</h2>

      <form onSubmit={handleSubmit} className="mood-form">
        {error && <p className="form-error">{error}</p>}

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <label htmlFor="mood">How are you feeling?</label>
        <select
          id="mood"
          value={mood}
          onChange={(event) => setMood(event.target.value)}
        >
          <option value="">Choose a mood</option>
          <option value="1">1 - Very Sad</option>
          <option value="2">2 - Sad</option>
          <option value="3">3 - Okay</option>
          <option value="4">4 - Happy</option>
          <option value="5">5 - Very Happy</option>
        </select>

        <label htmlFor="weather">Weather</label>
        <select
          id="weather"
          value={weather}
          onChange={(event) => setWeather(event.target.value)}
        >
          <option value="">Choose weather</option>
          <option value="Sunny">☀️ Sunny</option>
          <option value="Cloudy">☁️ Cloudy</option>
          <option value="Rainy">🌧️ Rainy</option>
          <option value="Snowy">❄️ Snowy</option>
          <option value="Windy">💨 Windy</option>
        </select>

        <label htmlFor="note">Notes</label>
        <textarea
          id="note"
          rows="4"
          value={note}
          placeholder="How was your day?"
          onChange={(event) => setNote(event.target.value)}
        />

        <div className="form-buttons">
          <Button type="submit">
            {editingEntry ? "Update Entry" : "Save Entry"}
          </Button>

          {editingEntry && (
            <Button
              type="button"
              onClick={cancelEdit}
              className="cancel-button"
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </section>
  );
}

export default MoodForm;