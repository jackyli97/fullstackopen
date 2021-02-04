import React from "react";
import CountryInfo from "./CountryInfo";


const CountriesList = ({ countriesToShow, handleShow }) => {
  return (
    <div>
      {countriesToShow.map((country) => {
        return <ul key={country.callingCodes}>{country.name}
         <button onClick={()=>handleShow(country.callingCodes)}>show</button>
         <div id={country.callingCodes}
         style={{display: "none"}}>
           <CountryInfo country={country}/>
         </div>
         </ul>;
      })}
    </div>
  );
};

export default CountriesList;