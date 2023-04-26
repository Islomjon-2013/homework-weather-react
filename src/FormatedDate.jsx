import React from "react";

const FormatedDate = (props) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  } else if (hour < 10) {
    hour = `0${hour}`;
  }
  return (
    <div>
      {day}
      {hour}:{minutes}
    </div>
  );
};

export default FormatedDate;
