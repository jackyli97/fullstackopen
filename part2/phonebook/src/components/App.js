import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

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
    }
  }

  const checkExists = (name) => {
    return persons.filter(person=>person.name === name).length > 0;
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      })}
    </div>
  );
};

export default App;
