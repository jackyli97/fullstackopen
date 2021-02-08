import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  if (!weather) {
    return <div></div>;
  }
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "15%", height: "10%" }}>
        temperature: {weather.current.temperature} Celcius
        <img src={weather.current.weather_icons}></img>
        wind: {weather.current.wind_speed} direction {weather.current.wind_dir}
      </div>
    );
};

export default Weather;
