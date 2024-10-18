export const getWeatherData = async () => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current=temperature_2m,wind_speed_10m&timezone=auto`;
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      const {
        current: { wind_speed_10m: windSpeed, temperature_2m: temperature },
      } = data;
      return { windSpeed, temperature };
    }
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
};
