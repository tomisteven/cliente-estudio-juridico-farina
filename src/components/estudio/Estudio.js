import React from "react";
import "./Estudio.css";
import icon_portada from "../../assets/banco2.png";

export default function Estudio() {
  return (
    <main>
      <section class="parallax" id="estudio">
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
          <h1 className="title-portada">FARINA BALBI</h1>
          <p>ESTUDIO JURIDICO PENAL</p>

          <h2 className="subtitulo-portada">
            Plaza Paso Nro. 159, Piso 5to. “B” La Plata
          </h2>
          <h2 className="subtitulo-portada">
            Avenida Callao Nro. 569, Piso 3ro. CABA.
          </h2>
          <h2 className="subtitulo-portada">
            Horarios: Lunes a Sabados de 08:00 a 19:00 Hs
          </h2>

          <div class="overlay"></div>
          <button
            onClick={() => {
              window.location.href =
                "https://api.whatsapp.com/send?phone=5492215619155&text=Hola%20Dr.%20Julian%20Farina%20Balbi%2C%20quisiera%20hacerle%20una%C2%A0consulta";
            }}
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
