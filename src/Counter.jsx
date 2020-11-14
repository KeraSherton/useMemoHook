import React from "react";

const Counter = (props) => {
  console.log(`render of ${props.button}`);
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={props.funct}>{props.button}</button>
      <p> {props.value} </p>
    </div>
  );
};

export default Counter;
