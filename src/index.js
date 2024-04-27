import React from "react";
import ReactDOM from "react-dom";

const name = "Pankaj Sahu";
const currDate = new Date().toLocaleDateString();

ReactDOM.render(
  <>
    <h1>Hello My Name is {name}</h1>
    <p>Current Date is = {currDate} </p>
  </>,
  document.getElementById("root")
);
