import React from 'react';

const PersonInfo = (props) => {
    return (
      <>
        {props.numbersToShow.map((person) => {
          return (
            <li>
            {person.name} {person.number} <button onClick={()=>props.handleDelete(person.id, person.name)}>delete</button>
            </li>
          );
        })}
      </>
    );
}

export default PersonInfo;