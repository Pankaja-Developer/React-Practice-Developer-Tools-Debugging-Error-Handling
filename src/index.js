import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";

// function ncard(value) {
//   return (
//     <Card
//       imgsrc={value.imgscr}
//       title={value.title}
//       sname={value.sname}
//       link={value.link}
//     />
//   );
// }

ReactDOM.render(
  <>
    <h1 className="heading_style">List Of 5 Netflix Seriesvalue </h1>
    {/* {Sdata.map(ncard)} */}

    {/* {Sdata.map(function ncard(value) {
      return (
        <Card
          imgsrc={value.imgscr}
          title={value.title}
          sname={value.sname}
          link={value.link}
        />
      );
    })} */}

    {Sdata.map((value) => {
      return (
        <Card
          imgsrc={value.imgscr}
          title={value.title}
          sname={value.sname}
          link={value.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
