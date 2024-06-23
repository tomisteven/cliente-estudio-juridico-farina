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
            <img src={icon_portada} alt="" />
            <div className="dos"></div>
          </span>
          <h1
            className="title-portada"
            style={{
              fontSize: "3em",
              color: "#fff",
              textShadow: "1px 1px 2px #000",
              textAlign: "center",
              marginTop: "2%",
              marginBottom: "0",
            }}
          >
            Estudio Juridico Farina Balbi
          </h1>

          <h2 className="subtitulo-portada">
            Direccion: Av Simpreviva 1234, La Plata, Buenos Aires
          </h2>
          <h2 className="subtitulo-portada" style={{ borderBottom: "none" }}>
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
