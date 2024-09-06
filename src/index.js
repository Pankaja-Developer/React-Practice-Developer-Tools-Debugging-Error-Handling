import React from "react";
import ReactDOM from "react-dom";
// import App from "./App"
// import something, {title, Myname} from "./App";
import * as something from "./App";

ReactDOM.render(
  <>
    <ol>
      {/* <li>{App}</li> */}
      {/* <li>{something}</li>
      <li>{title}</li>
      <li>{Myname()}</li> */}
       <li>{something.default}</li>
      <li>{something.title}</li>
      <li>{something.Myname()}</li>

    </ol>
  </>,
  document.getElementById("root")
);
