/** @format */
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}
function formatDay(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return day;
}
function showTemperature(response) {
  let tempEl = document.getElementById("int");
  let temp = Math.round(response.data.temperature.current);
  cityName.innerHTML = response.data.city;
  tempEl.innerHTML = temp;
  let weatherConditionEl = document.querySelector(".todayWeather");
  let weatherCindition = response.data.condition.description;
  weatherConditionEl.innerHTML = weatherCindition;
  let humidityEl = document.querySelector(".humidity");
  let humidity = response.data.temperature.humidity;
  humidityEl.innerHTML = humidity;
  let windEl = document.querySelector(".wind");
  let wind = Math.round(response.data.wind.speed);
  windEl.innerHTML = wind;
  let iconEl = document.getElementById("icon");
  let icon = `<img src="${response.data.condition.icon_url}" class="icon" />`;
  iconEl.innerHTML = icon;
  let date = new Date(response.data.time * 1000);
  let timeEl = document.getElementById("currentTime");
  let time = formatTime(date);
  timeEl.innerHTML = time;
  let dayEl = document.getElementById("todayWeekName");
  let day = formatDay(date);
  dayEl.innerHTML = day;
}
function search(event) {
  event.preventDefault();
  let cityInput = document.getElementById("cityInput").value;
  let apiKey = "35obt3d4a77e941e006826ae0feb45c4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

let city = document.getElementById("searchForm");
city.addEventListener("submit", search);
