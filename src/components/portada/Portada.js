import React from "react";
import "./Portada.css";
import icon_portada from "../../assets/banco2.png";
/* import logoPortada from "../../assets/logooficial.png"; */

export default function Portada() {
  React.useEffect(() => {
    document.querySelector(".container-info-portada").className =
      "container-info-portada scroll";
  }, []);

  return (
    <div className="portada-principal">
      <div class="container-info-portada">
         <span className="span">
          <div className="uno"></div>
          <img src={icon_portada} alt="" />
          <div className="dos"></div>
        </span>
        {/* <h5 className="title-portada">Estudio Juridico Farina Balbi</h5> */}
        <h3 className="title-portada-2">Farina Balbi Estudio Juridico</h3>
        <h2 className="subtitulo-portada">Especializado en Derecho Penal</h2>

        <div class="overlay"></div>
        <button className="btn-portada">Conocé más</button>
      </div>
    </div>
  );
}
