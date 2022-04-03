import React from "react";
import "./Attribution.css";

export default function footer() {
  return (
    <div className="Attribution">
      <p className="Attribution mt-3 mb-2 mb-0">
        Coded by H. R. Tagliarini, open-sourced on 
        <a href="https://github.com/HRHTaggers/weather-app-react" className="Attribution"> Github</a> &
        hosted on Netlify.
      </p>
      <div>
        <a
          href="https://www.htcode.co.uk"
          target="blank"
          rel="noreferrer"
          className="Attribution"
        >
          <img
            src="../public/img/helen-tagliarini-logo.png"
            alt="Helen Tagliarini logo"
            className="Attribution img-fluid"
          />
        </a>
      </div>
      <a
        href="https://www.htcode.co.uk"
        target="blank"
        rel="noreferrer"
        className="Attribution"
      >
        www.htcode.co.uk
      </a>
    </div>
  );
}
