import React from "react";
import "./Item.css";

export default function Item({ nombre, descripcion, icon }) {
  return (
    <div className="card-diagonal">
      <div className="icon-container">
        <img className="icon-card" src={icon} alt={nombre} />
      </div>
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
    </div>
  );
}

