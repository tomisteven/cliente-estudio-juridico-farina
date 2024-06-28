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
import estupefacientes  from "../../assets/estupefacientes.png";
import violencia from "../../assets/violencia.png";
import economia from "../../assets/economia.png";

export default function Especializaciones() {
  const especializaciones = [
    {
      nombre: "DEFENSAS PENALES INTEGRALES",
      descripcion:
        "Ofrecemos una defensa completa y absoluta a lo largo de todo el proceso ante todo tipo de delitos: Atención de urgencia en comisaria y detención, investigación preparatoria, juicio oral y recursos. Te aseguramos una defensa diseñada estratégicamente para explotar al máximo las posibilidades de tu caso.",
      icon: balanza,
    },
    {
      nombre: "REPRESENTACION DE VICTIMAS",
      descripcion:
        "Representamos integralmente a familiares y víctimas de delitos. Tanto en el proceso penal como en el proceso civil y de familia, nuestro compromiso es brindar asesoramiento completo para lograr, desde el trabajo en equipo, identificar las mejores estrategias probatorias  para lograr así sentencias respetuosas de sus derechos.  ",
      icon: v,
    },
    {
      nombre: "JUICIO POR JURADOS",
      descripcion:
        "Te asesoramos y litigamos en casos de juicio por jurados. Desde el ofrecimiento de prueba, la selección de los jurados y las jornadas de debate, ofrecemos una defensa técnica especializada y actualizada en materia de Jurados.",
      icon: jurado,
    },
    {
      nombre: "EXCARCELACIONES Y LIBERTAD",
      descripcion:
        "Ante el abuso de la prisión preventiva que existe en la justicia, es necesario desde el inicio del proceso contar con una defensa activa,  tanto para controlar las medidas de investigación como para generar pruebas defensivas, y desde allí sostener la libertad del imputado durante todo el proceso. Te aseguramos una defensa de excelencia en excarcelaciones, eximición de prisión, juicio abreviado, suspensión del juicio a prueba, prisión domiciliaria y morigeraciones.",
      icon: carcel,
    },
    {
      nombre: "DELITOS CONTRA LA INTEGRIDAD SEXUAL",
      descripcion:
        "Estos delitos requieren una defensa sumamente activa y estratégica. Las circunstancias de privacidad en la que ocurren estas conductas hacen que el manejo de la prueba y los apoyos científicos sean manejados por la defensa con máxima profesionalidad.",
      icon:sexual,
    },
    {
      nombre: "DELITOS CONTRA LAS PERSONAS",
      descripcion:
        "Nos especializamos en litigar estratégicamente casos de homicidio y lesiones, dolosos y culposos. La gravedad de estos casos demandan que tu defensa esté garantizada desde el inicio de la investigación. Para eso contamos con un equipo interdisciplinario de peritos capaz de brindarte la mejor defensa para tu caso.",
      icon: personas,
    },
    {
        nombre: "DELITOS CONTRA LA PROPIEDAD",
        descripcion:
            "Ofrecemos defensas eficaces y estratégicas en casos de robo, hurto, estafas, defraudaciones, extorsión, usurpación. La defensa en estos casos requiere un examen profesional y exhaustivo del material probatorio de cargo para elegir la forma más eficaz de defensa para tu caso.",
        icon: propiedad,
    },
    {
        nombre: "ESTUPEFACIENTES Y NARCOTRAFICO",
        descripcion:
            "Ofrecemos una defensa completa en casos de estupefacientes. La tenencia, producción, suministro y transporte de drogas ilegales sin autorización son solo algunas conductas que la ley castiga con severas penas. La defensa de estos casos requiere urgencia y abordaje interdisciplinario para diferenciar consumos de narcotráfico.",
        icon: estupefacientes,
    },
    {
      nombre : "CIBERCRIMEN",
      descripcion : "El avance de la tecnología ha incrementado los delitos cometidos por medios informáticos: phishing, ransomware, suplantación de identidad, ciberacoso, sextorsión, cripto estafas, son solo algunas modalidas delictivas. Ya seas víctima de un ciberataque, o imputado, podemos ayudarte. Somos especialistas en esta materia como en el manejo profesional de la evidencia digital.",
      icon : ciber
    },
    {
      nombre : "VIOLENCIA DE GENERO",
      descripcion : "Los avances normativos permiten hoy hacer justicia en casos que antes quedaban en el olvido. La perspectiva de género es una obligación impuesta por Tratados Internacionales. Tanto las víctimas como los imputados en casos de esta especie requieren un asesoramiento legal especializado. Contamos con experiencia y formación actualizada al respecto.",
      icon : violencia
    },
    {
      nombre : "PENAL ECONOMICO Y EMPRESARIAL",
      descripcion : "Contamos con calificados peritos y profesionales para alcanzar las mejores soluciones en los casos de defraudaciones complejas, lavado de activos, delitos tributarios, económicos y de la empresa. Podemos ayudarte con una mirada integral y especializada en la materia.",
      icon : economia
    },
    {
      nombre : "OTRAS ESPECIALIDADES",
      descripcion : "Te ofrecemos asesoramiento y representación integral en siniestros viales, representación ante compañía de seguros, accidentes laborales y junta médica, despidos, alimentos y divorcios, sucesiones y amparos de salud. Nuestro compromiso es encontrar junto a vos la mejor solución para tu caso.",
      icon : balanza
    }
  ];

  return (
    <div className="section-especilizaciones">
      <h2 className="title-especializaciones">Especializaciones</h2>
      <div className="especializaciones">
        {especializaciones.map((especializacion, index) => (
          <Item key={index} {...especializacion} />
        ))}
      </div>
    </div>
  );
}
