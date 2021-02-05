import React from "react";
import CountryInfo from "./CountryInfo";


const CountriesList = ({ countriesToShow, handleShow, addToRefs }) => {
  return (
    <div>
      {countriesToShow.map((country, i) => {
        return (
          <div key={i}>
            {country.name}
            <button onClick={() => handleShow(i)}>
              show
            </button>
            <div
              ref={addToRefs}
              style={{ display: "none" }}
            >
              <CountryInfo country={country} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;