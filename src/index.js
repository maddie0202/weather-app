/** @format */

function showTemperature(response) {
  let tempEl = document.getElementById("int");
  let temp = Math.round(response.data.daily[now.getDay()].temperature.day);
  cityName.innerHTML = response.data.city;
  tempEl.innerHTML = temp;
  let weatherConditionEl = document.querySelector(".todayWeather");
  let weatherCindition =
    response.data.daily[now.getDay()].condition.description;
  weatherConditionEl.innerHTML = weatherCindition;
  let humidityEl = document.querySelector(".humidity");
  let humidity = response.data.daily[now.getDay()].temperature.humidity;
  humidityEl.innerHTML = humidity;
  let windEl = document.querySelector(".wind");
  let wind = Math.round(response.data.daily[now.getDay()].wind.speed);
  windEl.innerHTML = wind;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.getElementById("cityInput").value;
  let apiKey = "35obt3d4a77e941e006826ae0feb45c4";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityInput}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[now.getDay()];
let todayWeekNameEl = document.getElementById("todayWeekName");
todayWeekNameEl.innerHTML = today;
let min = now.getMinutes();
if (min < 10) {
  min = `0${min}`;
}
let time = `${now.getHours()}:${min}`;
let currentTimeEl = document.getElementById("currentTime");
currentTimeEl.innerHTML = time;

let city = document.getElementById("searchForm");
city.addEventListener("submit", search);
