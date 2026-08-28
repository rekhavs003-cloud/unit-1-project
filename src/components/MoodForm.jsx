import { useState } from "react";
import ChooseWeather from "./ChooseWeather";

function MoodForm() {
  const [mood, setMood] = useState("");
  const [weather, setWeather] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  function moodSave(event) {
  event.preventDefault();

  const moodEntry = {
    date: date,
    mood: mood,
    weather: weather,
    note: note
  };

  console.log(moodEntry);
}

  return (
    <form onSubmit={moodSave}>
      <h2>Record Your Mood</h2>

      <label>
        Date:
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
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

      <ChooseWeather
  weather={weather}
  setWeather={setWeather}
/>

      <label>
        Note:
        <textarea placeholder="How was your day?"  value={note}
  onChange={(event) => setNote(event.target.value)}/>

      </label>

      <button type="submit">Save</button>
    </form>
  );
}

export default MoodForm;