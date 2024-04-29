import React from "react";
import ReactDOM from "react-dom";

const name = "Pankaj";
const image1 = "https://picsum.photos/136/354";
const image2 = "https://picsum.photos/200/354";
const image3 = "https://picsum.photos/400/354";
const link = "https://github.com/Pankaja-Developer?tab=repositories";

ReactDOM.render(
  <>
    <h1 contentEditable="true">My name is {name}</h1>
    <img src={image1} alt="loading image" />
    <img src={image1} alt="loading image" />
    <a href={link} target="-Pankaj">
      <img src={image1} alt="loading image" />
    </a>
  </>,

  document.getElementById("root")
);
