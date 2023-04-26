import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemprature from "./WeatherTemprature";
const WeatherInfo = (props) => {
  return (
    <div>
      <h1>{props.info.city}</h1>

      <ul>
        <li>
          <FormatedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 degree">
          <WeatherIcon code={props.info.icon} />

          <WeatherTemprature celcius={props.info.temprature} />
        </div>
        <div className="col-6">
          <ul>
            <li className="text-danger humidity">
              Humidity:
              <span className="text-light mx-2">{props.info.humidity}%</span>
            </li>
            <li className="text-danger humidity">
              Wind{" "}
              <span className="text-light">
                {Math.round(props.info.wind)} km/h
              </span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
