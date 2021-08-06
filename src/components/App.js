import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = ({ forecasts, location }) => {
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={forecasts[0]} />
    </div>
  );
};

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  // forecast: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     date: PropTypes.number.isRequired,
  //     humidity: PropTypes.number.isRequired,
  //     temperature: PropTypes.shape({
  //       min: PropTypes.number,
  //       max: PropTypes.number,
  //     }),
  //     wind: PropTypes.shape({
  //       speed: PropTypes.number,
  //       direction: PropTypes.string,
  //     }),
  //   })
  // ).isRequired,
};

export default App;
