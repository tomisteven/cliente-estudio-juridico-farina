import React from "react";
import "./Presentacion.css";
import img from "../../assets/portadaof2.webp";

export default function Presentacion() {
  return (
    <section
      id="acercade"
      className="presentacion-section"
      aria-label="Presentación del abogado Dr. Julian Farina Balbi"
    >
      <div className="presentacion-container">
        <div className="presentacion-grid">
          {/* Left Column: Image with offset frame */}
          <div className="presentacion-image-wrapper">
            <div className="presentacion-image-frame"></div>
            <img
              className="presentacion-img"
              src={img}
              alt="Fotografía del Abogado Penalista Dr. Julian Farina Balbi en su oficina en La Plata"
            />
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="presentacion-info">
            <span className="presentacion-badge">Trayectoria Académica y Profesional</span>
            <h1 className="presentacion-title">Dr. Julián Farina Balbi</h1>
            <h2 className="presentacion-subtitle">Abogado Especialista en Derecho Penal</h2>

            <div className="presentacion-divider"></div>

            <p className="presentacion-text">
              El Dr. Julián Farina Balbi es un reconocido abogado penalista de la
              ciudad de La Plata. Es egresado de la Universidad Nacional de La
              Plata y Magíster en Derecho Penal por la Universidad de Palermo. Su sólida
              formación académica y compromiso con el ejercicio profesional guían cada defensa.
            </p>

            {/* Structured Credentials Grid */}
            <div className="presentacion-credentials">
              <div className="credential-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>Magister en Derecho Penal</h4>
                  <p>Universidad de Palermo</p>
                </div>
              </div>
              <div className="credential-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>Especialista en Prueba Penal</h4>
                  <p>Universidad de Castilla La Mancha (España)</p>
                </div>
              </div>
              <div className="credential-item">
                <i className="fas fa-university"></i>
                <div>
                  <h4>Docente e Investigador</h4>
                  <p>Cátedra de Derecho Penal en la Universidad del Este</p>
                </div>
              </div>
              <div className="credential-item">
                <i className="fas fa-gavel"></i>
                <div>
                  <h4>Instructor de Enjuiciamiento</h4>
                  <p>Jurado de Enjuiciamiento de Magistrados (PBA) desde 2011</p>
                </div>
              </div>
            </div>

            <p className="presentacion-text">
              Con más de 20 años de experiencia, defiende de manera proactiva y eficaz los
              derechos de personas sometidas al sistema penal en la provincia de Buenos Aires,
              fuero federal y nacional, acompañado de un equipo interdisciplinario de excelencia.
            </p>

            <button
              aria-label="Asesórese con el Dr. Julian Farina Balbi por WhatsApp"
              onClick={() => {
                window.location.href =
                  "https://api.whatsapp.com/send?phone=5492215619155&text=Hola%20Dr.%20Julian%20Farina%20Balbi%2C%20quisiera%20hacerle%20una%C2%A0consulta";
              }}
              className="presentacion-btn"
            >
              <i className="fab fa-whatsapp"></i>
              Asesorate con Nosotros
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

