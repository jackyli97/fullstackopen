import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from './Search';
import PersonForm from './PersonForm';
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

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      axios.delete(`http://localhost:3001/persons/${id}`)
      .then(()=>{
        setPersons(persons.filter(person=>person.id !== id));
      })
      .catch(error=>{
        alert("This number does not exist");
      })
    }
  }

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

    if (checkExists(newName)){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        handleNumberUpdate();
      };
    }
    else{
      const request = axios.post("http://localhost:3001/persons",{
        name: newName, number: newNumber, id: persons.length+1
      });
      request.then(response=>response.data)
      .then((returnedPerson=>{
        // const newPerson = [
        //   { name: newName, number: newNumber, id: persons.length + 1 },
        // ];
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      }))
      .catch(error=>{
        alert(error)
      })
    }
  };

  const handleNumberUpdate = () => {
    const person = persons.find((per) => per.name === newName);
    const url = `http://localhost:3001/persons/${person.id}`;
    const changedPerson = {...person, number: newNumber};

    const request = axios.put(url, changedPerson);
    request.then(response=>response.data)
    .then((returnedPerson) => {
      setPersons(
        persons.map(per=> per.id !== person.id ? per : returnedPerson)
      );
      setNewName("");
      setNewNumber("");
    })
    .catch((error) => {
      alert(error);
    });
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
      <PersonInfo numbersToShow={numbersToShow} handleDelete={handleDelete}/>
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
