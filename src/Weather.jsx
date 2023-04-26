import React from "react";
import App from "./App";

const Weather = () => {
  return (
    <div>
      <div>
        <App defaultCity="Berlin" />
        <footer className="text-center">
          This project was coded by Khulkar.
          <a href="https://github.com/Islomjon-2013/homework-weather-react">
            GitHub
          </a>{" "}
          and <a href="">Open sources</a>
        </footer>
      </div>
    </div>
  );
};

export default Weather;
