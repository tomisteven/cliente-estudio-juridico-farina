import React from "react";
import "./Portada.css";
import icon_portada from "../../assets/banco2.png";

export default function Portada() {
  React.useEffect(() => {
    document.querySelector(".container-info-portada-p").className =
      "container-info-portada-p scroll";
  }, []);

  return (
    <section id="inicio" aria-label="Portada del Estudio Jurídico Farina Balbi">
      <div className="portada-principal-p">
        <div className="container-info-portada-p">
          <h1 className="h1">Abogado Penalista en La Plata</h1>
          <span className="span-p">
            <div className="uno-p"></div>
            <img
              alt="Icono del Estudio Jurídico Farina Balbi, abogados penalistas en La Plata"
              src={icon_portada}
            />
            <div className="dos-p"></div>
          </span>

          <h2 className="subtitulo-portada-p">Estudio Jurídico Penal</h2>
          <h3 className="title-portada-2-p">Farina Balbi</h3>
          <p className="expertos-p">
            Expertos en delitos sexuales y falsas denuncias.
          </p>
          <div className="overlay"></div>

          <button
            aria-label="Ver blog del Estudio Farina Balbi"
            onClick={() => {
              window.location.href = "/diario";
            }}
            className="btn-portada-p"
          >
            Blog
          </button>
        </div>
      </div>
    </section>
  );
}
