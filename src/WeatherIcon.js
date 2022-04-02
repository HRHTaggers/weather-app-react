import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon() {
  return (
    <div className="WeatherIcon">
      <img
        src="images/02d.png"
        alt="sun with clouds"
        className="WeatherIcon img-fluid"
      />
    </div>
  );
}
