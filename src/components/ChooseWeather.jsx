function ChooseWeather({ weather, setWeather }) {
  return (
    <label>
      Weather:
      <select
        value={weather}
        onChange={(event) => setWeather(event.target.value)}
      >
        <option value="">Choose the weather</option>
        <option value="sunny">Sunny</option>
        <option value="cloudy">Cloudy</option>
        <option value="rainy">Rainy</option>
        <option value="snowy">Snowy</option>
        <option value="stormy">Stormy</option>
      </select>
    </label>
  );
}

export default ChooseWeather;