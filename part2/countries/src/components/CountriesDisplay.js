import React from "react";
import CountriesList from "./CountriesList";
import CountryInfo from "./CountryInfo";


const CountriesDisplay = ({ countriesToShow, handleShow, addToRefs }) => {
  return (
    <div>
      {countriesToShow.length > 10 ? (
        "Too much matches, specify another filter"
      ) : countriesToShow.length > 1 ? (
        <CountriesList
          addToRefs={addToRefs}
          countriesToShow={countriesToShow}
          handleShow={handleShow}
        />
      ) : countriesToShow.length === 1 ? (
        <CountryInfo country={countriesToShow[0]} />
      ) : null}
    </div>
  );
};

export default CountriesDisplay;
