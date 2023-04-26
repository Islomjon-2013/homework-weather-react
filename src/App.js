import React, { useState } from "react";
import "./app.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
const App = (props) => {
  const [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.weather[0].icon,
    });
    setReady(true);
  }
  function Search() {
    let key = "b1a8336ff1e05b64da5625e4158fbea3";
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(api).then(handleresponse);
  }

  function handlesubmit(e) {
    e.preventDefault();
    Search();
  }
  function handlecityChange(e) {
    setCity(e.target.value);
  }

  if (ready) {
    return (
      <div className="app">
        <div className="weather">
          <form onSubmit={handlesubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  onChange={handlecityChange}
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
          <WeatherInfo info={weatherdata} />
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
};

export default App;
