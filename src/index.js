import React from "react";
import ReactDOM from "react-dom";

const name = "Pankaj Sahu";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
    <h1>Hello My Name is {name}</h1>
    <p>
      Current Date is = {currDate} {currTime}
    </p>
  </>,
  document.getElementById("root")
);
