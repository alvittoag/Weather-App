getWeatherData = (city) => {
  let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

  fetch(FULL_URL)
    .then((response) => response.json())
    .then((city) => {
      showWeatherData(city);
    })
    .catch((err) => alert("Nama kota tidak ditemukan", err));
};

const searchCity = () => {
  let city = document.getElementById("city-input");
  if (city.value == "") {
    alert("Masukan nama kota!");
  } else {
    getWeatherData(city.value);
    city.value = "";
  }
};

const showWeatherData = (weatherData) => {
  if (weatherData.name == undefined) {
    cityName.value = "";
  } else {
    const cityName = document.getElementById("city-name");
    cityName.innerHTML = `<i class="bi bi-building"></i> ${weatherData.name}`;
  }

  const imageIcon = document.getElementById("iconImage");
  imageIcon.innerHTML = `<img src = 'icons/${weatherData.weather[0].icon}.png' height =113 width = 113>`;

  const weatherType = document.getElementById("weather-type");
  weatherType.innerText = `${weatherData.weather[0].main}`;

  const temp = document.getElementById("temp");
  temp.innerText = `${weatherData.main.temp}`;
  const minTemp = document.getElementById("min-temp");
  minTemp.innerText = `${weatherData.main.humidity}`;
  const maxTemp = document.getElementById("max-temp");
  maxTemp.innerText = `${weatherData.wind.speed}`;
};
