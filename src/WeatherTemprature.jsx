import React, { useState } from "react";

const WeatherTemprature = (props) => {
  const [unit, setUnit] = useState("celcius");
  function convertFarenhait(e) {
    e.preventDefault();
    setUnit("farenheit");
  }
  function convertCelcius(e) {
    e.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div>
        {Math.round(props.celcius)}
        <span className="span">
          ℃|{" "}
          <a onClick={convertFarenhait} href="/">
            ℉
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div>
        {Math.round(farenheit)}{" "}
        <span className="span">
          ℃|{" "}
          <a onClick={convertCelcius} href="/">
            ℉
          </a>
        </span>
      </div>
    );
  }
};

export default WeatherTemprature;
