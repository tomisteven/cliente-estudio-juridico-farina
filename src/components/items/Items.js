import React from "react";
import "./Items.css";
import Item from "./Item.js";
import icon24 from "../../assets/icon24.png";
import iconExcarcelaciones from "../../assets/iconExcarcelaciones.png";
import iconConsultorioJuridico from "../../assets/iconoConsultorioJuridico.png";

export default function Items() {
  const data = [
    {
      backgroundColor: "#aeb7c2",
      color: "#000000",
      title: "Atencion 24 horas",
      description: "Ante emergencias llamar al +54 11 2235-1544",
      icon: icon24,
    },
    {
      backgroundColor: "#d9c9ba",
      color: "#000000",
      title: "Excarcelaciones",
      description:
        "Por urgencias llamar al +54 11 2235-1544 o al +54 11 2235-1544 en horario de 8 a 18hs",
      icon: iconExcarcelaciones,
    },
    {
      backgroundColor: "#aeb7c2",
      color: "#000000",
      title: "Consultorio Juridico",
      description:
        "Por consultas de manera presencial o virtual, comunicarse al +54 11 2235-1544",
      icon: iconConsultorioJuridico,
    },
  ];

  return (
    <div className="container-items-section">
      <h2>¿En qué podemos ayudarte?</h2>
      <div class="cont-items">
        {data.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
