import React from "react";
import "./Estudio.css";
import icon_portada from "../../assets/banco2.png";

export default function Estudio() {
  return (
    <main>
      <section class="parallax">
        <div
          class="container-info-portada"
          style={{
            position: "relative",
            left: "82%",
          }}
        >
          <span className="span">
            <div className="uno"></div>
            <img src={icon_portada} alt="Abogado en Ciudad de la plata" />
            <div className="dos"></div>
          </span>
          <h1
            className="title-portada"
          >
            Estudio Juridico Farina Balbi
          </h1>

          <h2 className="subtitulo-portada">
            Direccion: Calle 48 Nro. 877, of. 403
          </h2>
          <h2 className="subtitulo-portada">
            Horarios: Lunes a Sabados de 08:00 a 19:00 Hs
          </h2>

          <div class="overlay"></div>
          <button
            className="btn-portada"
            style={{
              width: "auto",
            }}
          >
            Consulta Sin Cargo
          </button>
        </div>
      </section>
    </main>
  );
}
