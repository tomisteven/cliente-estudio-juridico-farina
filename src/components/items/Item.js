import React from "react";
import "./Item.css";

export default function Item({icon, title, description, backgroundColor, color}) {
  return <div className="item" style={{
    backgroundColor: backgroundColor,
    color: color

  }}>
    <img src={icon} alt="imagen" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>;
}
