import React from "react";

const CountryInfo = ({ country }) => {
  return <div>
    <h1>{country.name}</h1>

    <p>capital: {country.capital}</p>
    <p>population: {country.population}</p>

    <h3>languages</h3>
    {country.languages.map(language=>{
        return(
            <li>{language.name}</li>
        )
    })}

    <img src={country.flag} style={{marginTop: "15px",width: "10%", height: "10%"}}></img>
  </div>;
};

export default CountryInfo;