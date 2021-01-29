import React from "react";

const Persons = (props) => {
  return (
    <div> 
      filter shown with{" "}
      <input onChange={props.handleChange("search")} value={props.newSearch} />
    </div>
  );
};

export default Persons;
