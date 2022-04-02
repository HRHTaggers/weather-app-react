import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h3 className="Weather--City text-center">
        <strong>Current Weather:</strong> {props.city}
      </h3>
      <div classname="container-fluid">
      <div classname="row">
        <div classname="col-md-4">
            <p className="Weather--Temperature">
            <strong>Temperature:</strong> {props.temperature}C
            </p>
        </div>
        <div classname="col-md-4">
            <p className="Weather--Description">
            <strong>Description:</strong> {props.description}
            </p>
        </div>
        <div classname="col-md-4">
            <p className="Weather--Humidity">
            <strong>Humidity:</strong> {props.humidity}%
            </p>
            <p className="Weather--Windspeed">
            <strong>Windspeed:</strong> {props.windspeed}km/ph
            </p>
            <img className="Weather--Icon" src={props.icon} alt={props.description} />
        </div>
      </div>
      </div>
    </div>
  );
}
