import React from "react";
import "./Presentacion.css";
import img from "../../assets/portadaof2.webp";
/* import img2 from "../../assets/presentacion2.jpeg";
import logo from "../../assets/logonegro.png"; */

export default function Presentacion() {
  onscroll = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 720) {
      console.log("entro", window.scrollY);
      document.querySelector(".cont-info-presentacion").className =
        "cont-info-presentacion scroll";
    }
  };

  return (
    <div className="container-section-presentacion">
      <div class="cont-img-presentacion">
        <img
          className="img-presentacion"
          src={img}
          alt="imagen de presentacion"
        />
      </div>
      <div className="cont-info-presentacion">
        <h1 className="title-portada">Dr Julian Farina Balbi</h1>
        <p className="presentacion-descripcion">
          El Dr. Julián Farina Balbi es abogado egresado de la Universidad
          Nacional de La Plata. Es Especialista en Prueba Penal por la
          Universidad de Castilla La Mancha (España), y Docente Investigador por
          la Universidad del Este, actualmente Profesor adjunto de la materia
          Derecho Penal Especial. Asimismo se desempeña también como instructor
          en la Secretaría Permanente del Jurado de Enjuiciamiento de
          Magistrados de la Provincia de Buenos Aires desde el año 2011. Ha
          contribuido con numerosos aportes doctrinarios en materia de derecho
          penal, juicio por jurados, derecho procesal penal y razonamiento
          probatorio, materias que constituyen sus puntos de investigación en el
          plano académico, publicadas en las más prestigiosas revistas
          jurídicas. Cuenta con más de 20 de experiencia en el ejercicio
          profesional, conformada por la defensa exitosa de causas en toda la
          provincia de Buenos Aires, conurbano bonaerense, fuero federal y
          nacional. La excelencia académica, la actualización permanente, y la
          experiencia construida a lo largo de los últimos 20 años de ejercicio,
          sumado a un equipo interdisciplinario de profesionales colaboradores,
          hacen que confiar la defensa de tus derechos al Estudio Farina Balbi
          sea una garantía de calidad.
        </p>
        <button>Asesorate con nosotros</button>
      </div>
    </div>
  );
}
