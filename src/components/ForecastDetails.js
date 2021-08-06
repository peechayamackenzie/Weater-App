import React from "react";
import PropTypes from "prop-types";
import ForecastDetail from "./ForecastDetail";

const ForecastDetails = ({ forecast }) => {
  return (
    <div className="forecast-details">
      <ForecastDetail
        key={forecast.date}
        date={forecast.date}
        temperature={forecast.temperature}
        humidity={forecast.humidity}
        wind={forecast.wind}
      />
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
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
