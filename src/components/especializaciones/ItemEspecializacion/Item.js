import React from "react";
import "./Item.css";

export default function Item({ nombre, descripcion, icon }) {
  return (
    <div className="card-diagonal">
      <img className="icon-card" src={icon} alt={descripcion} />
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
    </div>
  );
}
