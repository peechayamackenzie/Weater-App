import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__temperature">
        <p>{`Max Temperature: ${temperature.max}°c`}</p>
        <p>{`Min Temperature: ${temperature.min}°c`}</p>
      </div>
      <div className="forecast-details__humidity">
        <p>{`Humidity: ${humidity}%`}</p>
      </div>
      <div className="forecast-details__wind">
        <p>{`Wind: ${wind.speed}`}</p>
      </div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};
