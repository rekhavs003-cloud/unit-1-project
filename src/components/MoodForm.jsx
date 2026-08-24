import { useState } from "react";

function MoodForm() {
  const [mood, setMood] = useState("");
  function moodSave(event) {
    event.preventDefault();
    alert("Mood Saved!");
  }

  return (
    <form onSubmit={moodSave}>
      <h2>Record Your Mood</h2>

      <label>
        Date:
        <input type="date" />
      </label>

      <label>
        Mood:
        <select value={mood}
    onChange={(event) => setMood(event.target.value)}  >
          <option value="">Select your mood</option>
          <option value="1">1 - Happy</option>
          <option value="2">2 - Tired</option>
          <option value="3">3 - Calm</option>
          <option value="4">4 - Stressed</option>
          <option value="5">5 - Sad</option>
        </select>
      </label>

      <label>
        Weather:
        <select>
          <option value="">Choose the weather</option>
          <option value="sunny">Sunny</option>
          <option value="cloudy">Cloudy</option>
          <option value="rainy">Rainy</option>
          <option value="snowy">Snowy</option>
          <option value="stormy">Stormy</option>
        </select>
      </label>

      <label>
        Note:
        <textarea placeholder="How was your day?" />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}

export default MoodForm;