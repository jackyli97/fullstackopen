import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from './Search';
import PersonForm from './PersonForm';
import Persons from './Persons';
import PersonInfo from "./PersonInfo";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

useEffect(()=>{
  axios.get("http://localhost:3001/persons")
  .then(response=>{
    setPersons(response.data);
  });
},[]);

  const handleChange = (type) => {
    return event => {
      if (type === "name") setNewName(event.target.value);
      else if (type === "number") setNewNumber(event.target.value);
      else if (type === "search") setNewSearch(event.target.value);
    }
  }

  const numbersToShow = newSearch.length === 0 ? persons : persons.filter(person=>person.name.toLowerCase().includes(newSearch));

  const handleNewPerson = (event) => {
    event.preventDefault();
    if (checkExists(newName))window.alert(`${newName} is already added to phonebook`);
    else{
      const newPerson = [{name: newName, number: newNumber, id: persons.length+1}];
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  }

  const checkExists = (name) => {
    return persons.filter(person=>person.name === name).length > 0;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search handleChange={handleChange} newSearch={newSearch}/>
      <PersonForm handleChange={handleChange} handleNewPerson={handleNewPerson} newName={newName} newNumber={newNumber}/>
      {/* <form onSubmit={handleNewPerson}>
        <div>
          name: <input onChange={handleChange("name")} value={newName} />
        </div>
        <div>
          number: <input onChange={handleChange("number")} value={newNumber} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      <h2>Numbers</h2>
      <PersonInfo numbersToShow={numbersToShow}/>
      {/* {numbersToShow.map((person) => {
        return (
          <>
            <li>
              {person.name} {person.number}
            </li>
          </>
        );
      })} */}
      {/* <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleChange("search")} value={newSearch} />
      </div>
      <form onSubmit={handleNewPerson}>
        <div>
          name: <input onChange={handleChange("name")} value={newName} />
        </div>
        <div>
          number: <input onChange={handleChange("number")} value={newNumber} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {numbersToShow.map((person) => {
        return (
          <>
            <li>
              {person.name} {person.number}
            </li>
          </>
        );
      })} */}
    </div>
  );
};

export default App;
