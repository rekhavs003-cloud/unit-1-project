import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./MoodForm.css";

function MoodForm({
  addMoodEntry,
  editingEntry,
  updateMoodEntry,
  cancelEdit
}) {
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("");
  const [weather, setWeather] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  // Fill the form when editing an existing entry.
  useEffect(() => {
    if (editingEntry) {
      setDate(editingEntry.date);
      setMood(editingEntry.mood);
      setWeather(editingEntry.weather);
      setNote(editingEntry.note);
    } else {
      setDate("");
      setMood("");
      setWeather("");
      setNote("");
    }

    setError("");
  }, [editingEntry]);

  function handleSubmit(event) {
    event.preventDefault();

    // Check every field before saving.
    if (!date) {
      setError("Please choose a date.");
      return;
    }

    if (!mood) {
      setError("Please choose your mood.");
      return;
    }

    if (!weather) {
      setError("Please choose the weather.");
      return;
    }

    if (!note.trim()) {
      setError("Please write a short note.");
      return;
    }

    setError("");

    const moodEntry = {
      id: editingEntry ? editingEntry.id : Date.now(),
      date: date,
      mood: mood,
      weather: weather,
      note: note.trim()
    };

    // Update an existing entry or add a new entry.
    if (editingEntry) {
      updateMoodEntry(moodEntry);
    } else {
      addMoodEntry(moodEntry);
    }

    // Clear the form after saving.
    setDate("");
    setMood("");
    setWeather("");
    setNote("");
  }

  return (
    <section className="mood-form-section">
      <h2>
        {editingEntry
          ? "Edit Mood Entry"
          : "Add Today's Mood"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mood-form"
      >
        {error && (
          <p className="form-error">
            {error}
          </p>
        )}

        {/* Date */}
        <label htmlFor="date">
          Date
        </label>

        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) =>
            setDate(event.target.value)
          }
        />

        {/* Mood */}
        <label htmlFor="mood">
          How are you feeling?
        </label>

        <select
          id="mood"
          value={mood}
          onChange={(event) =>
            setMood(event.target.value)
          }
        >
          <option value="">
            Choose a mood
          </option>

          <option value="Happy">
            😊 Happy
          </option>

          <option value="Unhappy">
            😢 Unhappy
          </option>

          <option value="Angry">
            😠 Angry
          </option>

          <option value="Anxious/Stressed">
            😰 Anxious/Stressed
          </option>

          <option value="Calm">
            😐 Calm
          </option>
        </select>

        {/* Weather */}
        <label htmlFor="weather">
          Weather
        </label>

        <select
          id="weather"
          value={weather}
          onChange={(event) =>
            setWeather(event.target.value)
          }
        >
          <option value="">
            Choose weather
          </option>

          <option value="Sunny">
            ☀️ Sunny
          </option>

          <option value="Cloudy">
            ☁️ Cloudy
          </option>

          <option value="Rainy">
            🌧️ Rainy
          </option>

          <option value="Snowy">
            ❄️ Snowy
          </option>

          <option value="Windy">
            💨 Windy
          </option>
        </select>

        {/* Notes */}
        <label htmlFor="note">
          Notes
        </label>

        <textarea
          id="note"
          rows="4"
          value={note}
          placeholder="How was your day?"
          onChange={(event) =>
            setNote(event.target.value)
          }
        />

        {/* Buttons */}
        <div className="form-buttons">

          <Button type="submit">
            {editingEntry
              ? "Update Entry"
              : "Save Entry"}
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
