import React from "react";
import "./SunriseSunset.css";

export default function SunriseSunset() {
  return (
    <div className="SunriseSunset">
      <ul className="SunriseSunset">
        <li>
          <img
            src="../public/img/Sunrise.png"
            alt="sunrise"
            className="SunriseSunset"
          />
          <p>
            <strong>Sunrise</strong>: 06:30
          </p>
        </li>
        <li>
          <img 
            src="../public/img/Sunset.png" 
            alt="sunset" 
            className="SunriseSunset" 
          />
          <p>
            <strong>Sunset</strong>: 18:30
          </p>
        </li>
      </ul>
    </div>
  );
}
