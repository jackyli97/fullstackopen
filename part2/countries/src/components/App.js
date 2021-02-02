import React, {useEffect, useState} from "react";
import axios from "axios";
import FindCountries from "./FindCountries";
import CountriesDisplay from "./CountriesDisplay";


const App = () => {
    const [query, setQuery] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(response=>{
            setCountries(response.data);
        })
    },[]);

    const handleQuery = (event) => {
        setQuery(event.target.value);
    }

    const countriesToShow = query.length === 0 ? [] : countries.filter(country=>country.name.toLowerCase().includes(query));
  
    return(
        <div>
            <FindCountries handleQuery={handleQuery} query={query}/>
            <CountriesDisplay countriesToShow={countriesToShow}/>
        </div>
    )
}

export default App;