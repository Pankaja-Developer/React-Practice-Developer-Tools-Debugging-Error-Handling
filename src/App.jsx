import React from "react";

function App() {
  let curDate = new Date();
  // let curDate = new Date(2024, 4, 30, 15);
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate >= 12 && curDate < 16) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else if (curDate >= 16 && curDate < 20) {
    greeting = "Good Evening";
    cssStyle.color = "gray";
  } else {
    greeting = "Good Night";
    cssStyle.color = "red";
  }

  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}
export default App;
