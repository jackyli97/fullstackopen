import React from 'react';

const PersonInfo = (props) => {
    return (
      <>
        {props.numbersToShow.map((person) => {
          return (
            <li>
            {person.name} {person.number}
            </li>
          );
        })}
      </>
    );
}

export default PersonInfo;