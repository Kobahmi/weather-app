const form = document.querySelector(".form");
const searchInput = document.querySelector(".search");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (searchInput === "") return;
  const weatherInfo = await getWeather(searchInput.value);
  searchResult(weatherInfo);
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2327933a270fa0d5f1b7ae0d2e8e9a52`,
      { mode: "cors" }
    );
    if (!response.ok) throw new Error(`${city} unknown`);
    const weatherData = convertData(await response.json());
    return weatherData;
  } catch (error) {
    alert("error");
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

const searchResult = (weatherData) => {
  if (!weatherData) return;

  const weather = document.querySelector(".city-weather");
  const city = document.querySelector(".city-name");
  const temperatureOne = document.querySelector(".temperature");
  const temperatureTwo = document.querySelector(".temperature-two");
  const humidityLevel = document.querySelector(".humid");
  const wind = document.querySelector(".speed");

  weather.innerText = weatherData.currentWeather[0].main;
  city.innerText = weatherData.cityName;
  temperatureOne.innerText = Math.round(weatherData.temperature);
  temperatureTwo.innerText = Math.round(weatherData.feelsLike);
  humidityLevel.innerText = Math.round(weatherData.humidity);
  wind.innerText = Math.round(weatherData.windSpeed);
};
