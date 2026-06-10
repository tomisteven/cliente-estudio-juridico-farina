import React from "react";
import "./Especializaciones.css";
import Item from "./ItemEspecializacion/Item";
import balanza from "../../assets/balanza.png";
import jurado from "../../assets/jurado.png";
import ciber from "../../assets/cibercrimen.png";
import v from "../../assets/victima.png";
import sexual from "../../assets/sexual.png";
import carcel from "../../assets/carcel.png";
import propiedad from "../../assets/propiedad.png";
import personas from "../../assets/personas.png";
import estupefacientes from "../../assets/estupefacientes.png";
import violencia from "../../assets/violencia.png";
import economia from "../../assets/economia.png";

export default function Especializaciones() {
  const especializaciones = [
    {
      nombre: "DEFENSAS PENALES INTEGRALES",
      descripcion:
        "Defensa completa en todas las etapas del proceso penal: urgencias en comisaría, investigación preparatoria, juicio oral y recursos.",
      icon: balanza,
    },
    {
      nombre: "REPRESENTACION DE VICTIMAS",
      descripcion:
        "Asesoramiento y representación legal integral de víctimas y familiares en procesos penales, civiles y de familia.",
      icon: v,
    },
    {
      nombre: "JUICIO POR JURADOS",
      descripcion:
        "Litigio y defensa técnica especializada en juicios por jurados, desde la selección del jurado hasta el debate oral.",
      icon: jurado,
    },
    {
      nombre: "EXCARCELACIONES Y LIBERTAD",
      descripcion:
        "Pedidos de excarcelación, eximición de prisión, morigeraciones y defensa activa de la libertad desde el inicio del caso.",
      icon: carcel,
    },
    {
      nombre: "DELITOS CONTRA LA INTEGRIDAD SEXUAL",
      descripcion:
        "Defensa estratégica y con absoluta reserva, con apoyo interdisciplinario y científico para el análisis de pruebas.",
      icon: sexual,
    },
    {
      nombre: "DELITOS CONTRA LAS PERSONAS",
      descripcion:
        "Especialistas en litigio de homicidios y lesiones (dolosos y culposos) con un equipo de peritos interdisciplinarios.",
      icon: personas,
    },
    {
      nombre: "DELITOS CONTRA LA PROPIEDAD",
      descripcion:
        "Defensa en casos de robo, hurto, estafas, extorsión y usurpación, mediante el análisis riguroso de la prueba de cargo.",
      icon: propiedad,
    },
    {
      nombre: "ESTUPEFACIENTES Y NARCOTRAFICO",
      descripcion:
        "Defensa penal especializada en causas de tenencia, transporte, comercialización de estupefacientes y narcotráfico.",
      icon: estupefacientes,
    },
    {
      nombre: "CIBERCRIMEN",
      descripcion:
        "Asesoramiento y defensa en delitos informáticos: phishing, estafas virtuales, ciberacoso y suplantación de identidad.",
      icon: ciber,
    },
    {
      nombre: "VIOLENCIA DE GENERO",
      descripcion:
        "Abordaje legal especializado con perspectiva de género, tanto para la defensa como para la asistencia de víctimas.",
      icon: violencia,
    },
    {
      nombre: "PENAL ECONOMICO Y EMPRESARIAL",
      descripcion:
        "Asistencia en defraudaciones complejas, lavado de activos, delitos tributarios y derecho penal corporativo.",
      icon: economia,
    },
    {
      nombre: "OTRAS ESPECIALIDADES",
      descripcion:
        "Siniestros viales, reclamos ante aseguradoras, accidentes laborales, sucesiones, divorcios y amparos de salud.",
      icon: balanza,
    },
  ];

  return (
    <section id="servicios">
      <div className="section-especilizaciones">
        <h2 className="title-especializaciones">Especializaciones</h2>
        <div className="especializaciones">
          {especializaciones.map((especializacion, index) => (
            <Item key={index} {...especializacion} />
          ))}
        </div>
      </div>
    </section>
  );
}
