import React from "react";
import "./Portada.css";
import icon_portada from "../../assets/banco2.png";
/* import logoPortada from "../../assets/logooficial.png"; */

export default function Portada() {
  React.useEffect(() => {
    document.querySelector(".container-info-portada-p").className =
      "container-info-portada-p scroll";
  }, []);

  return (
    <div className="portada-principal-p">
      <div class="container-info-portada-p">
        <span className="span-p">
          <div className="uno-p"></div>
          <img alt="Abogado Penalista Julian Farina Balbi en La Plata" src={icon_portada}  />
          <div className="dos-p"></div>
        </span>
        {/* <h5 className="title-portada">Estudio Juridico Farina Balbi</h5> */}
        <h1 className="h1">Abogado en la Ciudad de la Plata</h1>
        <h3 className="title-portada-2-p">Estudio Juridico Farina Balbi</h3>
        <h2 className="subtitulo-portada-p">Especializado en Derecho Penal</h2>

        <div class="overlay"></div>
        <button
          onClick={() => {
            window.location.href = "https://wa.link/36t96j";
          }}
          className="btn-portada-p"
        >
          Contacto Directo
        </button>
      </div>
    </div>
  );
}
