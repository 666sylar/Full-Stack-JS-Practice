import styles from "./Weather.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureLow, faWind } from "@fortawesome/free-solid-svg-icons";

const CurrentWeather = ({ windSpeed, temperature }) => {
  if (!windSpeed || !temperature) {
    return (
      <div className={styles.CurrentWeather}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className={styles.CurrentWeather}>
      <h2>Current Weather</h2>
      <div>
        <FontAwesomeIcon icon={faWind} />
        {` ${windSpeed.value} ${windSpeed.unit}`}
      </div>
      <div>
        <FontAwesomeIcon icon={faTemperatureLow} />
        {` ${temperature.value} ${temperature.unit}`}
      </div>
    </div>
  );
};

export default CurrentWeather;
