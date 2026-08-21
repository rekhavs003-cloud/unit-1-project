import { useState } from "react";
function MoodForm() {
  return (
    <div>
      <h2>Record Your Mood</h2>

      <label>
        Date:
        <input type="date" />
      </label>

      <label>
        Mood:
        <select>
          <option value="">Choose your mood</option>
          <option value="1">1 - Very Bad</option>
          <option value="2">2 - Bad</option>
          <option value="3">3 - Okay</option>
          <option value="4">4 - Good</option>
          <option value="5">5 - Very Good</option>
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

      <button type="submit">Save Entry</button>

    </div>
  )
}

export default MoodForm