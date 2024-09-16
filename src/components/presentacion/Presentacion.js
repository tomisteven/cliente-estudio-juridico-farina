import React from "react";
import "./Presentacion.css";
import img from "../../assets/portadaof2.webp";

export default function Presentacion() {
  return (
    <section
      id="acercade"
      aria-label="Presentación del abogado Dr. Julian Farina Balbi"
    >
      <div className="container-section-presentacion">
        <div className="cont-img-presentacion">
          <img
            className="img-presentacion"
            src={img}
            alt="Fotografía del Abogado Penalista Dr. Julian Farina Balbi en su oficina en La Plata"
          />
        </div>
        <div className="cont-info-presentacion">
          <h1>Dr. Julian Farina Balbi</h1>
          <h2>Abogado Especialista en Derecho Penal</h2>
          <p className="presentacion-descripcion">
            El Dr. Julián Farina Balbi es un reconocido abogado penalista de la
            ciudad de La Plata. Es egresado de la Universidad Nacional de La
            Plata. Es Magister en Derecho Penal por la Universidad de Palermo,
            Especialista en Prueba Penal por la Universidad de Castilla La
            Mancha (España), Investigador y Docente de Derecho Penal en la
            Universidad del Este. Asimismo se desempeña como instructor en la
            Secretaría Permanente del Jurado de Enjuiciamiento de Magistrados de
            la Provincia de Buenos Aires desde el año 2011. Ha contribuido con
            numerosos aportes doctrinarios en el campo del derecho penal,
            delitos sexuales, falsas denuncias y la prueba en el proceso penal,
            publicadas en las más prestigiosas revistas jurídicas.
          </p>
          <p className="presentacion-descripcion">
            Cuenta con más de 20 años de experiencia en el ejercicio
            profesional, defendiendo los derechos de personas sometidas al
            sistema penal en toda la provincia de Buenos Aires, fuero federal y
            nacional. La excelencia académica, la actualización permanente, y la
            experiencia, sumadas a un equipo interdisciplinario de profesionales
            colaboradores, hacen que confiar la defensa de tus derechos al
            Estudio Farina Balbi sea una garantía de calidad.
          </p>
          <button
            aria-label="Asesórese con el Dr. Julian Farina Balbi por WhatsApp"
            onClick={() => {
              window.location.href =
                "https://api.whatsapp.com/send?phone=5492215619155&text=Hola%20Dr.%20Julian%20Farina%20Balbi%2C%20quisiera%20hacerle%20una%C2%A0consulta";
            }}
          >
            Asesorate con nosotros
          </button>
        </div>
      </div>
    </section>
  );
}
