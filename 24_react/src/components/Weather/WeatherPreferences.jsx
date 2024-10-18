import styles from "./Weather.module.css";

const WeatherPreferences = ({ windSpeedUnit, setWindSpeedUnit, temperatureUnit, setTemperatureUnit }) => {
  return (
    <div className={styles.WeatherPrefences}>
      <label htmlFor="windSpeedUnit">Wind speed unit:</label>
      <select id="windSpeedUnit" value={windSpeedUnit} onChange={(e) => setWindSpeedUnit(e.target.value)}>
        <option value="kmh">Km/h</option>
        <option value="ms">M/s</option>
      </select>
      <label htmlFor="temperatureUnit">Temperature unit:</label>
      <select id="temperatureUnit" value={temperatureUnit} onChange={(e) => setTemperatureUnit(e.target.value)}>
        <option value="C">℃</option>
        <option value="F">℉</option>
      </select>
    </div>
  );
};

export default WeatherPreferences;
