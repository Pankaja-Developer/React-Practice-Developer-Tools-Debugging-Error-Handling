import React from "react";
import ReactDOM from "react-dom";

const name = "Pankaja Sahu";
ReactDOM.render(
  <>
    <h1>My name is {name}</h1>
    <p>{2 + 3}</p>
    <p>{Math.random()}</p>
  </>,
  document.getElementById("root")
);
