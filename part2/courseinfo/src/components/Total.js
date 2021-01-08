import React from "react";

const Total = ({parts}) => {
  let tot = parts.reduce((res, ele)=>{
    return res += ele.exercises;
  },0)
  return <p>Number of exercises {tot}</p>;
};

export default Total;