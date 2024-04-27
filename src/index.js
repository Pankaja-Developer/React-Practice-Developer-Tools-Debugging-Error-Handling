import React from "react";
import ReactDOM from "react-dom";

const fname = "Pankaja";
const lname = "Sahu";
ReactDOM.render(
  <>
    {/* <h1>My name is {`${fname} ${lname}`}</h1> */}
    <h1>{`My name is ${fname} ${lname}`}</h1>
    <p>{`${2 + 3}`}</p>
    <p>{`${Math.random()}`}</p>
  </>,
  document.getElementById("root")
);
