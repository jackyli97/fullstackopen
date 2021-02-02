import React from "react";

const FindCountries = (props) => {
  return <div>
      find countries <input type="text" value={props.query} onChange={props.handleQuery}></input>
  </div>
};

export default FindCountries;
