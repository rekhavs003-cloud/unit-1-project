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

      <label htmlFor="mood">How are you feeling?</label>

<select
  id="mood"
  value={mood}
  onChange={(event) => setMood(event.target.value)}
>
  <option value="">Choose a mood</option>
  <option value="Happy">😊 Happy</option>
  <option value="Unhappy">😢 Unhappy</option>
  <option value="Angry">😠 Angry</option>
  <option value="Anxious/Stressed">😰 Anxious/Stressed</option>
  <option value="Calm">😐 Calm</option>
</select>

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