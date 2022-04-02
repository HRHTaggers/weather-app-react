import React from "react";
import "./DayForecast.css";

export default function DayForecast() {
  return (
    <div className="DayForecast">
      <p className="DayForecast">Wednesday</p>
      <img
        src="../public/img/02d.png"
        alt="sun with clouds"
        className="DayForecast img-fluid"
      />
    </div>
  );
}
