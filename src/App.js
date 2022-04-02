import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [windspeed, setWindspeed] = useState("");
  let [icon, setIcon] = useState("");

  function showWeatherDescription(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWindspeed(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
  }

  function searchCity(event) {
    event.preventDefault();
    let units = "metric";
    let apiKey = "72a4d6e3c49499c57e42e446cad198b6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(showWeatherDescription);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form className="App__form" onSubmit={searchCity}>
        <input
          type="search"
          placeholder="Enter city..."
          onChange={changeCity}
          className="App__form--input-search col-md-8 mt-3 me-3 mb-3 form-entry"
        />
        <input
          type="submit"
          value="Search"
          className="App__form--input-submit col-md-3 mt-3 mb-3 ms-3 search-button"
        />
      </form>
      <Weather
        city={city}
        temperature={temperature}
        description={description}
        humidity={humidity}
        windspeed={windspeed}
        icon={icon}
      />
    </div>
  );
}