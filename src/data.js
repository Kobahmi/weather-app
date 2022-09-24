const dataHandle = (() => {
  async function getWeather(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2327933a270fa0d5f1b7ae0d2e8e9a52`,
        { mode: "cors" }
      );
      if (!response.ok) throw new Error(`City ${city} unknown`);
      const weatherData = convertData(await response.json());
      return weatherData;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  async function getWeatherImperial(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=2327933a270fa0d5f1b7ae0d2e8e9a52`,
        { mode: "cors" }
      );
      if (!response.ok) throw new Error(`City ${city} unknown`);
      const weatherData = convertData(await response.json());
      return weatherData;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  const convertData = (data) => {
    const {
      name: cityName,
      weather: currentWeather,
      main: { temp: temperature, feels_like: feelsLike, humidity },
      wind: { speed: windSpeed },
    } = data;
    return {
      cityName,
      currentWeather,
      temperature,
      feelsLike,
      humidity,
      windSpeed,
    };
  };
  return { getWeather, getWeatherImperial };
})();

export default dataHandle;
