import React from "react";
import CountryInfo from "./CountryInfo";


const CountriesList = ({ countriesToShow }) => {
  return (
    <div>
      {countriesToShow.map((country) => {
        return <li>{country.name}
         <button>show</button>
         <div>{}</div>
         </li>;
      })}
    </div>
  );
};

export default CountriesList;