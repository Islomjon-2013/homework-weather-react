import React, { useState } from "react";
import "./app.css";
import axios from "axios";
import FormatedDate from "./FormatedDate";
const App = (props) => {
  const [weatherdata, setweatherData] = useState({});
  const [ready, setReady] = useState(false);
  function handleresponse(response) {
    console.log(response.data);
    setweatherData({
      temprature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="app">
        <div className="weather">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter city..."
                />
              </div>
              <div className="col-3">
                {" "}
                <input
                  className="btn btn-danger"
                  type="submit"
                  value="search"
                />
              </div>
            </div>
          </form>
          <h1>{weatherdata.city}</h1>

          <ul>
            <li>
              <FormatedDate date={weatherdata.date} />
            </li>
            <li className="text-capitalize">{weatherdata.description}</li>
          </ul>
          <div className="row">
            <div className="col-6 degree">
              <img
                className="img"
                src={weatherdata.iconUrl}
                alt={weatherdata.description}
              />
              {Math.round(weatherdata.temprature)} <span>℃</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity:{weatherdata.humidity}%</li>
                <li>Wind {Math.round(weatherdata.wind)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let key = "b1a8336ff1e05b64da5625e4158fbea3";
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${key}&units=metric`;
    axios.get(api).then(handleresponse);
    return "Loading...";
  }
};

export default App;
