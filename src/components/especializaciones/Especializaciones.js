import React, { useState, useEffect } from "react";
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

import "./Especializaciones.css";

export default function Especializaciones() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
      setCurrentPage(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(especializaciones.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && currentPage < totalPages - 1) {
      handleNext();
    }
    if (isRightSwipe && currentPage > 0) {
      handlePrev();
    }
  };

  return (
    <section id="servicios">
      <div className="section-especilizaciones">
        <h2 className="title-especializaciones">Especializaciones</h2>
        
        <div className="especializaciones-carousel">
          <button 
            className="carousel-control prev" 
            onClick={handlePrev} 
            disabled={currentPage === 0}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div 
            className="especializaciones-viewport"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="especializaciones-track"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {especializaciones.map((especializacion, index) => (
                <div 
                  className="especializacion-slide" 
                  key={index}
                  style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                >
                  <Item {...especializacion} />
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-control next" 
            onClick={handleNext} 
            disabled={currentPage >= totalPages - 1}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots-especializaciones">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot-especializacion ${currentPage === index ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
