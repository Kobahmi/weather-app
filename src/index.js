import dataHandle from "./data";

const form = document.querySelector(".form");
const searchInput = document.querySelector(".search");
const textDisplay = document.querySelector(".city-weather-container");
const toggleType = document.querySelector(".check");
const temperatureText = document.querySelector("#temperature-text");
const celsiusContainer = document.querySelector(".celsius-container");
const temperatureChange = document.querySelector(".temperature-change");
const temperatureTwoChange = document.querySelector(".temperature-two-change");
const windChange = document.querySelector(".wind-change");
const weather = document.querySelector(".city-weather");
const city = document.querySelector(".city-name");
const temperatureOne = document.querySelector(".temperature");
const temperatureTwo = document.querySelector(".temperature-two");
const humidityLevel = document.querySelector(".humid");
const wind = document.querySelector(".speed");

toggleType.addEventListener("change", async () => {
  if (toggleType.checked) {
    temperatureText.innerText = "Metric";
    temperatureChange.innerText = "°C";
    temperatureTwoChange.innerText = "°C";
    windChange.innerText = "M/S";
    const weatherInfo = await dataHandle.getWeather(searchInput.value);
    searchResult(weatherInfo);
  } else {
    temperatureText.innerText = "Imperial";
    temperatureChange.innerText = "°F";
    temperatureTwoChange.innerText = "°F";
    windChange.innerText = "MPH";
    const weatherInfo = await dataHandle.getWeatherImperial(searchInput.value);
    searchResult(weatherInfo);
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (searchInput.value === "") return;
  if (toggleType.checked) {
    temperatureText.innerText = "Metric";
    temperatureChange.innerText = "°C";
    temperatureTwoChange.innerText = "°C";
    windChange.innerText = "M/S";
    const weatherInfo = await dataHandle.getWeather(searchInput.value);
    searchResult(weatherInfo);
  } else {
    temperatureText.innerText = "Imperial";
    temperatureChange.innerText = "°F";
    temperatureTwoChange.innerText = "°F";
    windChange.innerText = "MPH";
    const weatherInfo = await dataHandle.getWeatherImperial(searchInput.value);
    searchResult(weatherInfo);
  }
});

const searchResult = (weatherData) => {
  if (!weatherData) return;

  textDisplay.style.opacity = "1";
  celsiusContainer.style.opacity = "1";

  weather.innerText = weatherData.currentWeather[0].main;
  city.innerText = weatherData.cityName;
  temperatureOne.innerText = Math.round(weatherData.temperature);
  temperatureTwo.innerText = Math.round(weatherData.feelsLike);
  humidityLevel.innerText = Math.round(weatherData.humidity);
  wind.innerText = Math.round(weatherData.windSpeed);
};
