import React from "react";
import Weather from "./Weather"

const CountryInfo = ({ country }) => {
  return (
    <>
      <h1>{country.name}</h1>

      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>

      <h3>Spoken languages</h3>
      {country.languages.map((language, i) => {
        return <li key={i}>{language.name}</li>;
      })}
      <img
        src={country.flag}
        style={{ marginTop: "15px", width: "10%", height: "10%" }}
      ></img>

      <h3>Weather in {country.name}</h3>
      <Weather capital={country.capital}/>

    </>
  );
};

export default CountryInfo;