import React from "react";
import "./ImagenConFrase.css";
import img from "../../assets/presentacion2.jpeg";
import educacion from "../../assets/educacion.png";

export default function ImagenConFrase() {
  return (
    <div className="cont-imagen-frase">
      <div class="img-frase">
        <img src={img} alt="" />
      </div>
      <div class="frase">
        <img src={educacion} alt="abogado penalista en la plata dr julian farina balbi"/>
        <p className="p-frase">
          “Los derechos no son otorgados por los gobiernos, sino que son inherentes a la dignidad humana. Defenderlos es preservar nuestra humanidad”
        </p>
        <p className="p-bold">Eleanor Roosevelt</p>
      </div>

    </div>
  );
}
