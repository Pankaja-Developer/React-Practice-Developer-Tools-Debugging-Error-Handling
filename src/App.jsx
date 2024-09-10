import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";
const App = () => (
  <>
    <h1 className="heading_style">List Of 5 Netflix Seriesvalue </h1>
    {Sdata.map((value) => {
      return (
        <Card
          key={value.id}
          imgsrc={value.imgsrc}
          title={value.title}
          sname={value.sname}
          link={value.link}
        />
      );
    })}
  </>
);

export default App;
