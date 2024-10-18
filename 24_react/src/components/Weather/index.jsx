import { Component } from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherPreferences from "./WeatherPreferences";
import styles from "./Weather.module.css";
import * as API from "../../api";

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windSpeed: null,
      temperature: null,
      selectedWindSpeedUnit: "kmh",
      selectedTemperatureUnit: "C",
    };
  }

  componentDidMount() {
    this.fetchWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedWindSpeedUnit, selectedTemperatureUnit, windSpeed, temperature } = this.state;

    if (selectedWindSpeedUnit !== prevState.selectedWindSpeedUnit) {
      this.setState({
        windSpeed: {
          value: this.convertUnit(windSpeed.value, selectedWindSpeedUnit, "windSpeed"),
          unit: selectedWindSpeedUnit === "kmh" ? "km/h" : "m/s",
        },
      });
    }

    if (selectedTemperatureUnit !== prevState.selectedTemperatureUnit) {
      this.setState({
        temperature: {
          value: this.convertUnit(temperature.value, selectedTemperatureUnit, "temperature"),
          unit: selectedTemperatureUnit === "C" ? "℃" : "℉",
        },
      });
    }
  }

  fetchWeather = async () => {
    try {
      const data = await API.getWeatherData();
      if (data) {
        this.setState({
          windSpeed: { value: data.windSpeed, unit: "km/h" },
          temperature: { value: data.temperature, unit: "℃" },
        });
      }
    } catch (error) {
      console.log("Failed to load weather data:", error);
    }
  };

  convertUnit = (value, unit, type) => {
    if (type === "windSpeed") {
      return unit === "kmh" ? parseFloat((value * 3.6).toFixed(1)) : parseFloat((value / 3.6).toFixed(1));
    } else if (type === "temperature") {
      return unit === "C"
        ? parseFloat(((value - 32) * (5 / 9)).toFixed(1))
        : parseFloat((value * (9 / 5) + 32).toFixed(1));
    }
  };

  handleWindSpeedUnitChange = (selectedWindSpeedUnit) => this.setState({ selectedWindSpeedUnit });
  handleTemperatureUnitChange = (selectedTemperatureUnit) => this.setState({ selectedTemperatureUnit });

  render() {
    const { selectedWindSpeedUnit, selectedTemperatureUnit, windSpeed, temperature } = this.state;

    return (
      <div className={styles.Weather}>
        <WeatherPreferences
          windSpeedUnit={selectedWindSpeedUnit}
          setWindSpeedUnit={this.handleWindSpeedUnitChange}
          temperatureUnit={selectedTemperatureUnit}
          setTemperatureUnit={this.handleTemperatureUnitChange}
        />
        <CurrentWeather windSpeed={windSpeed} temperature={temperature} />
      </div>
    );
  }
}

export default Weather;
