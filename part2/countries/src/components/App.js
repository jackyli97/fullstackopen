import React, {useEffect, useState, useRef} from "react";
import axios from "axios";
import FindCountries from "./FindCountries";
import CountriesDisplay from "./CountriesDisplay";


const App = () => {
    const [query, setQuery] = useState("");
    const [countries, setCountries] = useState([]);

     const revealRefs = useRef([]);
    //  revealRefs.current = [];

    useEffect(()=>{
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(response=>{
            setCountries(response.data);
        })
    },[]);

    const handleQuery = (event) => {
      setQuery(event.target.value);

      revealRefs.current = [];
    }

    const handleShow = (i) => {
        revealRefs.current[i].style.display =
        revealRefs.current[i].style.display === "none" ? "block" : "none"; 
    }

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)){
            revealRefs.current.push(el);
        }
        // console.log(revealRefs.current)
    }

    const countriesToShow = query.length === 0 ? [] : countries.filter(country=>country.name.toLowerCase().includes(query));


    return (
      <div>
        <FindCountries handleQuery={handleQuery} query={query} />
        <CountriesDisplay
          addToRefs={addToRefs}
          countriesToShow={countriesToShow}
          handleShow={handleShow}
        />
      </div>
    );
}

export default App;