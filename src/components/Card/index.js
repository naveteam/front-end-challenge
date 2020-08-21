import React from "react";
import "./index.css";

function Card(props) {
  return <div className="card">{props.children}</div>;
}

export default Card;
