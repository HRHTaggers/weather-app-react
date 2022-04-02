import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import DateTime from "./DateTime";
import AppTitle from "./AppTitle";
import SearchEngine from "./SearchEngine";
import AppSubtitle from "./AppSubtitle";
import MainTemperature from "./MainTemperature";
import HumidityWindspeed from "./HumidityWindspeed";
import WeatherIcon from "./WeatherIcon";
import SunriseSunset from "./SunriseSunset";
import ConversionButtons from "./ConversionButtons";
import WeatherDescription from "./WeatherDescription";
import DayForecast from "./DayForecast";
import DayTemperature from "./DayTemperature";
import DayForecastTitle from "./DayForecastTitle";
import Attribution from "./Attribution";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="container-fluid background p-5">
      <div className="row">
        <div className="col-md-8">
          <AppTitle />
        </div>
        <div className="col-md-4">
          <DateTime />
        </div>
      </div>
      <SearchEngine />
      <AppSubtitle />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <WeatherDescription />
            <HumidityWindspeed />
          </div>
          <div className="col-md-3 d-flex align-content-center flex-wrap justify-content-center">
            <WeatherIcon />
          </div>
          <div className="col-md-1 d-flex align-content-center flex-wrap justify-content-center">
            <MainTemperature />
            <ConversionButtons />
          </div>
          <div className="col-md-3 d-flex align-content-center justify-content-center">
            <SunriseSunset />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <DayForecastTitle />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <DayForecast />
            <DayTemperature />
          </div>
          <div className="col-md-2">
            <DayForecast />
            <DayTemperature />
          </div>
          <div className="col-md-2">
            <DayForecast />
            <DayTemperature />
          </div>
          <div className="col-md-2">
            <DayForecast />
            <DayTemperature />
          </div>
          <div className="col-md-2">
            <DayForecast />
            <DayTemperature />
          </div>
          <div className="col-md-2">
            <DayForecast />
            <DayTemperature />
          </div>
        </div>
      </div>
      <Attribution />
    </div>
  </StrictMode>,
  rootElement
);
