import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
// import WeatherIcon from "react-icons-weather";

const ForecastDetail = ({ date, temperature, humidity, wind }) => {
  return (
    <div className="forecast-detail">
      <div className="forecast-detail__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-detail__temperature">
        <p>{`Max Temperature: ${temperature.max}°c`}</p>
        <p>{`Min Temperature: ${temperature.min}°c`}</p>
      </div>
      <div className="forecast-detail__humidity">{`Humidity: ${humidity}%`}</div>
      <div className="forecast-detail__wind">{`Wind: ${wind.speed}`}</div>
    </div>
  );
};

export default ForecastDetail;

ForecastDetail.propTypes = {
  date: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
};
