import React, { useState, useEffect } from "react";
import "../styles/App.css";
// import PropTypes from "prop-types";
// import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  // const getForecast = () => {
  //   axios
  //     .get("https://mcr-codes-weather-app.herokuapp.com/forecast")
  //     .then((response) => {
  //       setSelectedDate(response.data.forecasts[0].date);
  //       setForecasts(response.data.forecasts);
  //       setLocation(response.data.location);
  //     });
  // };
  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

// App.propTypes = {
//   forecasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired,
//       icon: PropTypes.string.isRequired,
//       temperature: PropTypes.shape({
//         min: PropTypes.number,
//         max: PropTypes.number,
//       }),
//     })
//   ).isRequired,
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
// };

export default App;
