import React from 'react';

const Search = (props) => {
    return (
      <div>
        filter shown with{" "}
        <input onChange={props.handleChange("search")} value={props.newSearch} />
      </div>
    );
} 