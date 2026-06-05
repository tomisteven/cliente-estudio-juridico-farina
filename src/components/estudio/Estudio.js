import React from "react";
import "./Estudio.css";
import icon_portada from "../../assets/banco2.png";

export default function Estudio() {
  return (
    <main>
      <section className="estudio-parallax" id="estudio">
        <div className="estudio-overlay"></div>
        <div className="estudio-container">
          <div className="estudio-grid">
            {/* Column 1: Studio Identity */}
            <div className="estudio-identity">
              <div className="estudio-logo-wrapper">
                <span className="estudio-span-line"></span>
                <img src={icon_portada} className="estudio-logo-img" alt="Abogado en Ciudad de la plata" />
                <span className="estudio-span-line"></span>
              </div>
              <h1 className="estudio-title">FARINA BALBI</h1>
              <div className="estudio-divider"></div>
              <p className="estudio-subtitle">ESTUDIO JURÍDICO PENAL</p>
            </div>

            {/* Column 2: Details & Contact */}
            <div className="estudio-details">
              <div className="estudio-info-card">
                <div className="estudio-info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="estudio-info-text">
                  <h3>Sede La Plata</h3>
                  <p>Plaza Paso Nro. 159, Piso 5to. “B”</p>
                </div>
              </div>

              <div className="estudio-info-card">
                <div className="estudio-info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="estudio-info-text">
                  <h3>Sede CABA</h3>
                  <p>Avenida Callao Nro. 569, Piso 3ro.</p>
                </div>
              </div>

              <div className="estudio-info-card">
                <div className="estudio-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="estudio-info-text">
                  <h3>Horarios de Atención</h3>
                  <p>Lunes a Sábados de 08:00 a 19:00 Hs</p>
                </div>
              </div>

              <button
                onClick={() => {
                  window.location.href =
                    "https://api.whatsapp.com/send?phone=5492215619155&text=Hola%20Dr.%20Julian%20Farina%20Balbi%2C%20quisiera%20hacerle%20una%C2%A0consulta";
                }}
                className="estudio-btn-cta"
              >
                <i className="fab fa-whatsapp"></i>
                Consulta Sin Cargo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

