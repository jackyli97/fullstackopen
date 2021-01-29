import React from 'react';

const PersonForm = (props) => {
    return(
        <form onSubmit={props.handleNewPerson}>
            <div>
                name: <input onChange={props.handleChange("name")} value={props.newName} />
            </div>
            <div>
                number: <input onChange={props.handleChange("number")} value={props.newNumber} />
            </div>
            <div>debug: {props.newName}</div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm;
